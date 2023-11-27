import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewStudent from './components/ViewStudent';
import AddStudent from './components/AddStudent';
import DeleteStudent from './components/DeleteStudent';
import SearchStudent from './components/SearchStudent';

function App() {
  return (
   <BrowserRouter>

   <Routes>
    <Route path='view' element={<ViewStudent/>}/>
    <Route path='' element={<AddStudent/>}/>
    <Route path='delete' element={<DeleteStudent/>}/>

    <Route path='search' element={<SearchStudent/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
