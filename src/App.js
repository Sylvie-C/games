import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom" ; 

import Header from "./Header/Header" ; 
import ListFr from "./List/ListFr" ; 
import ListEn from "./List/ListEn" ; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<ListFr/>} />
        <Route path="/listen" element={<ListEn/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
