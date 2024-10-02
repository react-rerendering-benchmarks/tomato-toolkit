import { memo } from "react";
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { useTheme } from './useTheme';
const App = memo(function App() {
  useTheme();
  return <RouterProvider router={router} />;
});
export default observer(App);