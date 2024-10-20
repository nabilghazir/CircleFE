import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Base from '../pages/base'
import { Home } from '../layout/base/home'


export const Routes = () => {
    const router = createBrowserRouter([
        {
            element: <Base />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        }
    ])


    return <RouterProvider router={router} />
}