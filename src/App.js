import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import UserPage from './components/UserPage'

function App() {
  return (
    <div>
      <Routes>
      <Route exact path = '/' element={<Main />} />
      <Route exact path = '/user/:id' element = {<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
