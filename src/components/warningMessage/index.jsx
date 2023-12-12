import './styles.css'

export const WarningMessage = ({isOpen, message, onClick}) => {


  const handleClick = (e) => {
    let item = e.target;
    //So se clicar no fundo
    if(item.className  == 'backgroundMessage isOpen') {
      onClick();
    }
  }


  return (
  <div className= {isOpen ? 'backgroundMessage isOpen' : 'backgroundMessage'} onClick={(e) => handleClick(e)}>
    <div className="message">
      <p>{message}</p>
      <div className="links">
        <a target="_blank" className='apple' href="https://music.apple.com/us/album/spider-man-across-the-spider-verse-original-score/1690389672?l=pt-BR"></a>
        <a target="_blank" className='apple' href="https://music.apple.com/us/album/spider-man-into-the-spider-verse-soundtrack-from/1445949265?l=pt-BR"></a>
        <a target="_blank" className='artstation' href="https://www.artstation.com/artwork/rRJYOL"></a>
      </div>
      <button className='button-close' onClick={onClick}><p>ok</p></button>
    </div>
  </div>
  )
}
 
