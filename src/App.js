import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStudent/>}/>
      <Route path='/search' element={<SearchStudent/>}/>
      <Route path='/view' element={<ViewStudent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
