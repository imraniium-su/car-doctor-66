import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Checkout from '../../pages/Checkout/Checkout';
import Hone from '../../pages/Home/Hone';
import Login from '../../pages/Login/Login';
import Orders from '../../pages/Orders/Orders';
import SignUp from '../../pages/SignUp/SignUp';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Hone></Hone> },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id', element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders', element: <Orders></Orders>
            }
        ]
    }
])
export default router;