/*
 * © 2021 Thoughtworks, Inc.
 */

import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import logo from 'layout/HeaderBar/ccf_logo.png'
import { useAuth0 } from '@auth0/auth0-react'
import useStyles from 'layout/HeaderBar/headerBarStyles'

const EmissionMetricsHeaderBar = (): ReactElement => {
  const classes = useStyles()

  const {
    logout,
  } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <AppBar
      position="sticky"
      square={true}
      className={classes.appBar}
      id="app-bar-header"
    >
      <Toolbar className={classes.navContainer}>
        <NavLink to="/" className={classes.title}>
          <img
            src={logo}
            alt={'Zekia Logo'}
            className={classes.logo}
          />
          <Typography component="h1" variant="h5">
            Zekia
          </Typography>
        </NavLink>
        <NavLink to="/"> </NavLink>
        <NavLink to="/"> </NavLink>
        <NavLink to="/"> </NavLink>
        <NavLink to="/"> </NavLink>
        <NavLink to="/"> </NavLink>
        <NavLink to="/"> </NavLink>
        <NavLink to="/"> </NavLink>
        <NavLink to="/"> </NavLink>
        <NavLink to="/"> </NavLink>
        <NavLink to="/"> </NavLink>
        <NavLink to="/"> </NavLink>
        <NavLink to="/"> </NavLink>
        <NavLink
          to="/recommendations"
          className={clsx(classes.navLink, { isActive: classes.activeNavLink })}
        >
          <Typography component="h2">RECOMMENDATIONS</Typography>
        </NavLink>
        <NavLink
          to="/#"
          className={clsx(classes.navLink, { isActive: classes.activeNavLink })}
          id="qsLogoutBtn"
          onClick={() => logoutWithRedirect()}
        >
          <Typography component="h2">LOGOUT</Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}

export default EmissionMetricsHeaderBar
