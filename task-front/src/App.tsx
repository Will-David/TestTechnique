import './App.css';
import AppLayout from './components/layout/AppLayout.tsx';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import WelcomeLayout from './components/layout/WelcomeLayout.tsx';
import { routesAlias} from './routesalias.tsx';
import ListTaskPage from './routes/tasks/ListTaskPage.tsx';
import AddTaskPage from './routes/tasks/add/AddTaskPage.tsx';
import ErrorPage from './routes/404/404page.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UpdateTaskPage from './routes/tasks/update/updateTask.tsx';

function App() {
  const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route path= {routesAlias.task.home} element={<ListTaskPage/>}></Route>
            <Route path= {routesAlias.task.addTask} element={<AddTaskPage/>}></Route>
            <Route path= {routesAlias.task.update_task} element={<UpdateTaskPage/>}></Route>
          </Route>

          {/* Page destiné à l'Accueil*/}
          <Route path={routesAlias.home} element={<WelcomeLayout/>}></Route>
          <Route path ="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
    </>
  )
}

export default App