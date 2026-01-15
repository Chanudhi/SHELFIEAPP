import { StyleSheet, Text, View, Image } from 'react-native'
import {Link} from 'expo-router'
import logo from '../assets/img/logo.jpg'

import ThemedView from "../components/ThemedView"
import ThemedText from "../components/ThemedText"
import ThemedLogo from "../components/ThemedLogo"
import Spacer from "../components/Spacer"

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer />

      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>

      <Link href="/about" style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>

      <Link href="/contact" style={styles.link}>
        <ThemedText>Contact Page</ThemedText>
      </Link>
    </ThemedView>
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