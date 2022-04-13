import './First_Part.scss';
import logo from './logo-mastercraft.svg';

function FirstPart () {

    return (
       
        <div className="card" id="First-container">
            <img className='logo-craft' src={logo} alt="logo mastercraft"></img>
            <h1 className='BigTitle'>Mastercraft Bamboo Monitor Riser</h1>
            <p className='SimpText'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

            <div className='Button-container'>
                <button>Back this project</button>
                <button>Bookmark</button>
            </div>
        </div>
        
    )
    
}

export default FirstPart;