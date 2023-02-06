import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Scenes
import HomePage from "scenes/homePage"
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/home",
      element: <HomePage />
    },
    {
      path: "/profile/:userId",
      element: <ProfilePage />
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
