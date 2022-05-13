/*
 * © 2021 Thoughtworks, Inc.
 */

import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import useStyles from './headerBarStyles'
import logo from './ccf_logo.png'
import { useAuth0 } from '@auth0/auth0-react'

const HeaderBar = (): ReactElement => {
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
            alt={'Cloud Carbon Footprint Logo'}
            className={classes.logo}
          />
          <Typography component="h1" variant="h5">
            Cloud Carbon Footprint
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
          to="/emissionmetrics"
          className={clsx(classes.navLink, { isActive: classes.activeNavLink })}
        >
          <Typography component="h2">EMISSIONSMETRICS</Typography>
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

export default HeaderBar

