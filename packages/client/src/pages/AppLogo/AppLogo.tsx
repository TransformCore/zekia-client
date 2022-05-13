import logo from '../../layout/HeaderBar/ccf_logo.png'
import useStyles from '../../layout/HeaderBar/headerBarStyles'

const AppLogo = () => {
    const classes = useStyles()
    return (
        <div>
            <img
                src={logo}
                alt={'Cloud Carbon Footprint Logo'}
                className={classes.logo} />
        </div>
    );
};

export default AppLogo;