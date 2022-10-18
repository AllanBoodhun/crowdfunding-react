import './Stand_card.scss';

function StandCard (props) {
    let isActive = props.DaysLeft > 0? '':' inactive';
     
    return (
        <div className={"card stand-card" + isActive} id="">
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
            <span className='days'>{props.DaysLeft}</span> <span className='left'>left</span>
            </div>
            <button className="btn btn-primary stand-card__button">
              {props.DaysLeft > 0? 'Select Reward': 'Out of Stock'}
            </button>
        </div>
        
    )
    
}

export default StandCard;