import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MealInfo from './components/MealInfo';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          {/* <Route path='/:mealid' element={<MealInfo/>}/> */}
          <Route path='/meal/:mealId' element={<MealInfo />} />
        </Routes>
    </Router>
    
  );
}

export default App;
