import './App.css';
import { useState } from 'react';
import Inputer from './components/Inputer';
import ListDis from './components/ListDis';
function App() {
  
  const [AddList, setAddList] = useState([])
  const [DelList, setDelList] = useState([])

  return (
    <>
    <Inputer setAddList={setAddList} AddList={AddList} />
    <ListDis List={AddList} setDelList={setDelList}/>
    </>
  );
}

export default App;
