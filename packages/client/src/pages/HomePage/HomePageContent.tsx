import useStyles from 'layout/HeaderBar/headerBarStyles';
import { Text, View, StyleSheet } from 'react-native-web';

const HomePageContent = () => {
  const classes = useStyles()
  return (
    <div className={classes.navCenter}>
      <View style={styles.container}>
        <Text style={styles.text}><h1>Landing Page</h1></Text>
        <Text style={styles.text}><h1>Enter your org name and click continue to login with your org credentials</h1></Text>
      </View>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'green',
    alignSelf: 'stretch',
    alignItems: 'center',
    heigth: 80 // this dose not change the header height
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 14,
    textAlign: 'justifyContent',
    lineHeight: 0,
  }
})


export default HomePageContent
