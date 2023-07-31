import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Layout from '@app/components/Layout'
import { store } from '@app/store'
import 'react-toastify/dist/ReactToastify.css'
import './App.styles.scss'


const App = () => (
    <Provider store={store}>
        <ToastContainer position="bottom-left" />
        <Layout />
    </Provider>
)

export default App
