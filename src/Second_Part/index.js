import './Second_Part.scss';
import {useState} from 'react'

function SecondPart () {
    const [totalGift, setTotalGift] = useState(89914);
    const dreamGoal = 100000;
    const [totalBackers, setTotalBackers] = useState(5007);
    const [daysLeft, setDaysLeft] = useState(56);


    const progressionStyle = {
        width: `${Math.round(totalGift * 100 / dreamGoal)}%`,
    };
    
    function usFormat(number, currency = true){
        if(currency){
            return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3,style: 'currency', currency: 'USD' }).format(number);
        } else {
            return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3,}).format(number);
        }
      
    }

    return (
       
        <div className="card" id="Second-container">
            <div className='numbers-containers'>
                <div className='number'>
                    <div className='num'> {usFormat(totalGift)} </div>
                    <span>of $100,000 backed</span>
                </div>
                <div className='number'>
                    <div className='num'> {usFormat(totalBackers,false)} </div>
                    <span>total backers</span>
                </div>
                <div className='number'>
                    <div className='num'> {daysLeft} </div>
                    <span>days left</span>
                </div>
            </div>
            <div className='loading-bar'>
                <span style={progressionStyle}
                 className='progression'
                         >
                </span>
            </div>
        </div>
        
    )
    
}

export default SecondPart;