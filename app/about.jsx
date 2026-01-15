import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import {Link} from 'expo-router'
import {Colors} from '../constants/Colors'
const About = () => {
  const colorScheme =useColorScheme;
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[styles.container,{backgroundColor: theme.background}]}>
      <Text style={styles.title}>About Page</Text>

      <Link href="/" style={styles.btn}>Back Home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24
    },
        btn:{
        backgroundColor: 'green',
        color: 'white',
        padding: 16,
        marginTop: 10,
        borderRadius: 8
    }
})