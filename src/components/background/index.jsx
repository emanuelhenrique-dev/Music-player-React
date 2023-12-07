import { useEffect } from 'react';
import './styles.css';

import { useState } from 'react';

export const Background = ({img, custom}) => {
  
  const [loading, setLoading] = useState(false);


  const styles = {
    // Estilo da propriedade custom
    backgroundPosition: custom,

    backgroundImage: "url(" + img + ")",
    display: loading ? 'none' : 'block',   
  };

  useEffect(() => {
    changeImage();
  },[img]);

  const changeImage = () => {
    // ocultar a imagem principal
    setLoading(true);

    // Pré-carregar a nova imagem
    const image = new Image();
    image.onload = () => {
      setLoading(false);
    };
    
    image.src = img;
  };
   

  return ( 
    <>
    <div className="music background" 
    style={styles}></div>
    <div className='static background' ></div>
    </>
    
   );
}
 