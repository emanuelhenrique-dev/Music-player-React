import { useState } from 'react';
import './styles.css'


export const ButtonOption = ({className}) => {

  const [ativo, setAtivo] = useState(false);
  let timeoutId;

  const handleClick = () => {
    setAtivo(true);

    // Limpa o temporizador anterior (se houver)
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Configura um novo temporizador para desativar a animação após 1 segundo
    timeoutId = setTimeout(() => {
      setAtivo(false);
    }, 600);
  };

  return ( 
    <button className={`${className} option ${ativo ? 'pressed' : ''}`}
    onClick={handleClick}></button>
    
   );
}
 
