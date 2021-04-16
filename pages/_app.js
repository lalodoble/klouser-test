import '../styles/globals.css'
import '../styles/bootstrap-grid.scss'
import '../styles/buttons.scss'
import '../styles/icons.css'

import '../styles/referentes.scss'

import Footer from '../components/Footer'
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <content>
        <Component {...pageProps} />
      </content>
    </AuthProvider>
  )
}

export default MyApp
