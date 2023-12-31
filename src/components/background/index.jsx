import { useEffect } from 'react';
import './styles.css';

import { useState } from 'react';

export const Background = ({img, custom}) => {
  
  const [loading, setLoading] = useState(false);


  const styles = {
    // Estilo da propriedade custom
    '--position': custom,

    backgroundImage: "url(" + img + ")",
    display: loading ? 'none' : 'block',   
  };

  useEffect(() => {
    changeImage();
  },[img]);

  const changeImage = () => {
    console.log('mudou imagem')
    // ocultar a imagem principal
    setLoading(true);

    // Pré-carregar a nova imagem
    const image = new Image();
    image.onload = () => {
      setLoading(false);
      console.log('mudou imagem 2')
    };
    
    image.src = img;
  };
   

  return ( 
    <>
    <div className="background_container">
      <div className="effect music background"  style={styles} ></div>
      <div className="music background" style={styles}></div>
    </div>

    <div className='static background' ></div>
    </>
    
   );
}
 