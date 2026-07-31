import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import MainPage from '../src/components/MainPage.jsx'
import LoginPage from '../src/components/LoginPage.jsx'
import NewUserPage from '../src/components/NewUserPage.jsx'

function App(){
    return(
        <BrowserRouter>
            <>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/MainPage' element={<MainPage/>}/>
                <Route path='/NewUserPage' element={<NewUserPage/>}/>
            </Routes>
            </>
        </BrowserRouter>
    )   
}

export default App;

