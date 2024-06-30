import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div>
                <button>
                    <span>Click</span>
                </button>
            </div>
        ),
    },
])

export const App = () => {
    return <RouterProvider router={router} />
}
