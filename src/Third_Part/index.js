import './Third_part.scss';
import StandCard from './Stand_card';
import Description from './Description';



function ThirdPart (props) {

    const StandData = props.data.Stand;
    
    return (
       
        <div className="card" id="Third-container">
            <Description />
            <div className='stand-container'>
                {StandData.map((post) => (
                    <StandCard {...post} />
                ))}
            </div>

        </div>
        
    )
    
}

export default ThirdPart;