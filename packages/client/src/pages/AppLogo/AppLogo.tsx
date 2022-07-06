import logo from '../../layout/HeaderBar/ccf_logo.png'
import useStyles from '../../layout/HeaderBar/headerBarStyles'

const AppLogo = () => {
    const classes = useStyles()
    return (
        <div>
            <img
                src={logo}
                alt={'Zekia Logo'}
                className={classes.logo} />
        </div>
    );
};

export default AppLogo;
