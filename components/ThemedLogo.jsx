import { Image, useColorScheme } from 'react-native'

// images
import DarkLogo from '../assets/img/logo.jpg'
import LightLogo from '../assets/img/logo.jpg'

const ThemedLogo = () => {
  const colorScheme = useColorScheme()
  
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} />
  )
}

export default ThemedLogo