import './App.css'
import { AuthProvider } from './Context/AuthContext'
import AppRouter from './router/AppRouter'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'


const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>     
        <AppRouter/>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
