import '../App.css';
import React from 'react'
import Icon from '@material-ui/core/Icon'

function IconSwitch(props) {
    const {icon, onSwitch} = props;
    console.log(icon);
    return (
        <div>
            <button className='btn' onClick={onSwitch}>
                <Icon fontSize='large'>{icon}</Icon>
            </button>
        </div>
    )

}

export default IconSwitch;