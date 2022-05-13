/*
 * © 2021 Thoughtworks, Inc.
 */

import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Navigate, NavLink } from "react-router-dom"
import useStyles from '../../layout/HeaderBar/headerBarStyles'
import logo from '../../layout/HeaderBar/ccf_logo.png'
import HomePageContent from 'pages/HomePage/HomePageContent'
import clsx from 'clsx'
import { useAuth0 } from "@auth0/auth0-react"
import { ReactElement } from 'react'

const HomePageHeader = (): ReactElement => {
    const classes = useStyles()
    const {
        isAuthenticated,
        loginWithRedirect
    } = useAuth0()

    return (
        <><AppBar
            position="sticky"
            square={true}
            className={classes.appBar}
            id="app-bar-header"
        >
            <Toolbar className={classes.homeNavContainer}>
                <NavLink to={'/'} className={classes.title}>
                    <img
                        src={logo}
                        alt={'Cloud Carbon Footprint Logo'}
                        className={classes.logo} />
                    <Typography component="h1" variant="h5">
                        Cloud Carbon Footprint
                    </Typography>
                </NavLink>
                {!isAuthenticated && (
                    <NavLink to={'/'}
                        className={clsx(classes.navLink, { isActive: classes.activeNavLink })}
                        id="qsLoginBtn"
                        color="primary"
                        onClick={() => loginWithRedirect({})}
                    >
                        <Typography component="h2">LOGIN</Typography>
                    </NavLink>
                )}
                {isAuthenticated && (
                    <Navigate to={'/emissionsmetrics'} />
                )}
            </Toolbar>
        </AppBar>
            <HomePageContent />
        </>
    )
}

export default HomePageHeader
