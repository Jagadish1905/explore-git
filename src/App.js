import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './hoc-components/Login';
import Contacts from './hoc-components/Contacts';
import Dashboard from './hoc-components/Dashboard';
import { ProtectedRoute } from './hoc-components/ProtectedRoute';
import SearchPractice from './components/SearchPractice';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <SearchPractice/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path="contacts" element={<ProtectedRoute Element={Contacts} />} >
            <Route path="dashboard" element={<ProtectedRoute Element={Dashboard} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;