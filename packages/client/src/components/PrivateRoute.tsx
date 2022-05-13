    import { useAuth0 } from '@auth0/auth0-react'
    import { Navigate } from 'react-router-dom'

    const PrivateRoute = ({children}) => {
        
        const {
            isAuthenticated,
            getAccessTokenSilently
        } = useAuth0();

        getAccessTokenSilently().then((value) => { console.log('token value: ' + value) })

        const auth = isAuthenticated // determine if authorized, from context or however you're doing it

        console.log('auth cookie value: ' + auth)

        // If authorized, return an outlet that will render child elements
        // If not, return element that will navigate to login page
        return auth ? children : <Navigate to="/" />
    }

    export default PrivateRoute