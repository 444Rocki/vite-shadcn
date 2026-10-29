import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from './components/ui/toast';
import routes from './routes';
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {

  const router = createBrowserRouter(routes);

  return (
    <TooltipProvider>
      <RouterProvider router={router} />
      <Toaster />
    </TooltipProvider>
  );
}
export default App;
