//components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import {FiSend} from "react-icons/fi"
import UseForm from "./components/UseForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";
//Hooks
import { useform } from "./Hooks/useForm";
import { useState } from "react";

import './App.css';

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {


  const [data, setData]= useState(formTemplate);


  const updateFieldHandler = (key,value) => {
    
    setData((prev) => {
      return{...prev, [key]: value};
    });
  };

 const formComponents = [
  <UseForm data={data} updateFieldHandler={updateFieldHandler}/>,
  <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
  <Thanks data={data}/>
 ];

 const{ currentStep, currentcomponent, changeStep, IsLastSteps, IsFirstStep}= useform(formComponents);

  return (
    <div className='app'>
      <div className="hearder">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulério abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1,e)}>
          <div className="inputs-container">{currentcomponent}</div>
          <div className="actions">

          {!IsFirstStep && (   
            <button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span></button>)}
              
            {!IsLastSteps ? (
            <button type='submit'>
              <span>Avançar</span>
                <GrFormNext />
              </button>
              ) : (
                  <button type='button'>
                  <span>Enviar</span>
                  <FiSend /></button>
                )}
          </div>
        </form>
      </div>
     
    </div>
  )
}

export default App
