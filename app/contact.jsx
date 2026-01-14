import { StyleSheet, Text, View } from 'react-native'
import {Link} from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>

      <Link href="/" style={styles.btn}>Back Home</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b7d1f5',
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