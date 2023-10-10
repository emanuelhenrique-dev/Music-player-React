import './styles.css';

export const Background = ({img}) => {
  return ( 
    <div className="background" style={{backgroundImage: "url(" + img + ")"}} >   
    </div>
    
   );
}
 