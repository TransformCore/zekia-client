/* eslint-disable unused-imports/no-unused-imports-ts */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * © 2021 Thoughtworks, Inc.
 */

import { ReactElement, useCallback, useEffect, useState } from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Route, Routes, useNavigate } from 'react-router-dom'
import EmissionsMetricsPage from './pages/EmissionsMetricsPage'
import RecommendationsPage from './pages/RecommendationsPage/'
import ErrorPage from './layout/ErrorPage'
import HeaderBar from './layout/HeaderBar'
import MobileWarning from './layout/MobileWarning'
import { AxiosError } from 'axios'
import { formatAxiosError } from './layout/ErrorPage/ErrorPage'
import { ClientConfig } from './Config'
import loadConfig from './ConfigLoader'
import HomePage from 'pages/HomePage/HomePage'
import PrivateRoute from './components/PrivateRoute'
import AppLogo from "./pages/AppLogo"
import { useAuth0 } from '@auth0/auth0-react'
import Loading from 'components/Loading'

interface AppProps {
  config?: ClientConfig
}
export function App({ config = loadConfig() }: AppProps): ReactElement {
  const navigate = useNavigate()
  const onApiError = useCallback(
    (e: AxiosError) => {
      console.error(e)
      navigate('/error', { state: formatAxiosError(e) })
    },
    [navigate],
  )

  const [mobileWarningEnabled, setMobileWarningEnabled] = useState(
    window.innerWidth < 768,
  )

  const handleWarningClose = () => {
    setMobileWarningEnabled(false)
  }

  const useStyles = makeStyles(() => ({
    appContainer: {
      padding: 0,
      height: 'calc(100vh - 65px)',
    },
  }))

  const classes = useStyles()

  if (mobileWarningEnabled) {
    return (
      <Container maxWidth="xl" className={classes.appContainer}>
        <HeaderBar />
        <MobileWarning handleClose={handleWarningClose} />
      </Container>
    )
  }

  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Container maxWidth={false} className={classes.appContainer}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/logo" element={<AppLogo/>} />
          <Route path="/emissionsmetrics" element={<PrivateRoute><EmissionsMetricsPage config={config} onApiError={onApiError} /></PrivateRoute>} />
          <Route path="/recommendations" element={<PrivateRoute><RecommendationsPage config={config} onApiError={onApiError} /></PrivateRoute>} />
          <Route path="/error" element={<PrivateRoute><ErrorPage /></PrivateRoute>} />
        </Routes>
      </Container>
    </>
  )
}
export default App