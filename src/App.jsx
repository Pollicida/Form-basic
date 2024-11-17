import { useState,useEffect} from 'react'
import './App.css'
import FormLocalStorage from './components/FormLocalStorage'
import Lista from './components/Lista'

function App() {
  const [dataStudents,setDataStudents] = useState({
    numIne: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo: ''
  });
  const [showList,setShowList] = useState(false); 

  const callBackSetData = (data) => {
    setDataStudents(data);
  }
  
  const callBackSetShowList = (showList) => {
    setShowList(showList);
  }
  return (
    <div id="body">
      <div id="divForm">
        <FormLocalStorage callBackSetData={callBackSetData} callBackSetShowList={callBackSetShowList}/>
      </div>
      {showList &&
        <div id="divLista">
          <Lista data={dataStudents}></Lista>
        </div>
      }
    </div>
  )
}
export default App