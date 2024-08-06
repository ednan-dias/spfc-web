import { RouterProvider } from 'react-router-dom';
import { router } from '../routes';
import GlobalStyle from '../styles/global';

export function AppProvider() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}
