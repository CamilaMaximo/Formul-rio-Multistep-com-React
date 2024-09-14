
import {BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill,BsFillEmojiNeutralFill, BsFillEmojiFrownFill,
} from 'react-icons/bs';

import './Thanks.css';


const Thanks = (data) => {
  return (

    <div className='thanks-container'>
    <h1>Falta pouco...</h1> 
    <p>A sua opinião é muito importante, em breve você recebera um cupoam de 10% de desconto para sua próxima compra.</p>
    <p>Para concluir sua avaliação clique no botão Enviar abaixo.</p>
    <h3>Aqui está o resumo da sua avaliação:</h3>
    <p className='review-data'>
      <span>Satisfação com o produto</span>
    </p>
    <p className="review-data">
      <span>Comentário:</span>
    </p>
    </div>
  )
}

export default Thanks;
