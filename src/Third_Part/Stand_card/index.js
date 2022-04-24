import './Stand_card.scss';

function StandCard (props) {

    return (
       
        <div className="card stand-card" id="">
            <div className='stand-card__title'>
                {props.name}
            </div>
            <div className='stand-card__pledge'>
                Pledge ${props.Plege} or more
            </div>
            <div className='stand-card__description'>
            {props.Description}
            </div>
            <div className='stand-card__countdown'>
            {props.DaysLeft} <span className='left'>left</span>
            </div>
            <button className={props.DaysLeft > 0? 'active stand-card__button':'inactive stand-card__button'} >
              {props.DaysLeft > 0? 'Select Reward': 'Out of Stock'}
            </button>
        </div>
        
    )
    
}

export default StandCard;