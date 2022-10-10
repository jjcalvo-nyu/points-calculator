import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import UserPage from './components/UserPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element={<Main />} />
          <Route exact path = '/user/:id' element = {<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
