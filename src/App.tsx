import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { store } from '@app/store'
import Layout from '@app/components/Layout'

const App = () => (
    <Provider store={store}>
        <ToastContainer position="bottom-left" />
        <Layout />
    </Provider>
)

export default App
