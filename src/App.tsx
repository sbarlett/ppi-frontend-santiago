import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import QueryClientProvider from './provider/QueryClientProvider';

function App() {
  return (
    <QueryClientProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
