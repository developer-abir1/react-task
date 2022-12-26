import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer autoClose={500} />
    </div>
  );
}

export default App;
