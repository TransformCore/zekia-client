/*
 * © 2021 Thoughtworks, Inc.
 */

import ReactDOM from 'react-dom'

import { Root } from './Root'
import { Auth0Provider } from "@auth0/auth0-react"
import history from "./utils/history"
import { getConfig } from "../src/utils/config"

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  )
}

// Please see https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig()

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
}

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <Root />
  </Auth0Provider>,
  document.getElementById("root")
)
