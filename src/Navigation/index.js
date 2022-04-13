import './Navigation.scss';

function Navigation () {

    return (
       
        <nav className='nav-bar'>
            <input type='checkbox' id='toggle-nav'/>
            <label htmlFor='toggle-nav'>
                <span className='bar bar-one'></span>
                <span className='bar bar-two'></span>
                <span className='bar bar-three'></span>
            </label>
            <ul>
                <li><a href='#'> About </a></li>
                <li><a href='#'> Discover </a></li>
                <li><a href='#'> Get Started </a></li>
            </ul>
        </nav>
        
    )
    
}

export default Navigation;