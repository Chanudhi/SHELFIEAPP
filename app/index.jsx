import { StyleSheet, Text, View, Image } from 'react-native'
import {Link} from 'expo-router'
import logo from '../assets/img/logo.jpg'

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.img}/>
      <Text style={[styles.title,{color:'purple'}] }>The Number 1</Text>
      <Text style={{marginTop: 10,marginBottom:30}}>Reading list App</Text>
    <View style={styles.card}> 
        <Text>This is a card</Text>
    </View>
    <Link href='/about' style={styles.btn}>About</Link>
        <Link href='/contact' style={styles.btn}>Contact</Link>
    </View>
  )
}

export default Home

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
    card:{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    img:{
        width: 200,
        height: 200,
        margin: 16,
        borderRadius: 8
    },
    btn:{
        backgroundColor: 'green',
        color: 'white',
        padding: 16,
        marginTop: 10,
        borderRadius: 8
    }
})