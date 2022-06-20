import { Route, Routes } from 'react-router-dom'
import { AuthRouters } from  '../auth/routers/AuthRouters'
import { JournalRouters } from '../journal/routes/JournalRouters'


export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={<AuthRouters />}/>

          {/* JournalApp */}
        <Route path="/*" element={<JournalRouters />}/>


    </Routes>
  )
}
