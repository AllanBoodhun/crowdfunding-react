import './First_Part.scss';
import logo from './logo-mastercraft.svg';
import bookmark from './icon-bookmark.svg';

function FirstPart () {

    return (
       
        <div className="card" id="First-container">
            <img className='logo-craft' src={logo} alt="logo mastercraft"></img>
            <h1 className='BigTitle'>Mastercraft Bamboo Monitor Riser</h1>
            <p className='SimpText'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

            <div className='Button-container'>
                <button className='btn btn-primary'>Back this project</button>
                    <button className="button_bookmark">
                        <img className="icon_bookmark" src={bookmark} alt="icon-bookmark"></img>
                        <span className="button_bookmarkContent">Bookmark</span> 
                    </button>
            </div>
        </div>
        
    )
    
}

export default FirstPart;