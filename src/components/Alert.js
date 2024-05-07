import {Link} from 'react-router-dom';
import ksgStamp from '../assets/619.png';
import otrStamp from '../assets/162.png';

function Alert(props){

    if(props.show){
        //alert will change depending if the adding of items is successful or not
        if(props.isValid){
            return(
                //item addition success alert
                <div className="alert success card">
                    <div className='container-img'>
                        <img src={ksgStamp} className='image'/>
                    </div>
                    <p className='alert-message'>New item successfully added. <Link to="/" className='link-home'>Click to return home</Link> </p>
                </div>
            );
        }else{
            return(
                //item addition failed alert
                <div className="alert fail card">
                    <div className='container-img'>
                        <img src={otrStamp} className='image'/>
                    </div>
                    <p className='alert-message'>Invalid input. Please try again</p>
                </div>
            );
        }
    }
    
}

export default Alert;