import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Components/Pages/Home";
import AddTodoPage from "./Components/Pages/AddTodopage";
import { TodoProvider } from './Components/todoContext';
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <TodoProvider>
    <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/AddTodopage">Add Todo</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/AddTodopage" element={<AddTodoPage />} />
        </Routes>
    </TodoProvider>
    </BrowserRouter>
  );
}

export default App;