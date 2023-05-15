import {Slider} from 'antd';
import React from 'react';

const SpeedSlider = ({speedFunc}) => {
    return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <div style={{
                fontWeight: 'bold',
                fontFamily: 'Georgia', 
                color: 'rgb(24, 32, 42)',
                fontSize: '120%'}}>Sort Speed</div>
        <Slider
            defaultValue={30}
            style={{width: 150}}
            handleStyle={{borderColor: 'rgb(24, 32, 42)'}}
            trackStyle={{background: 'rgb(24, 32, 42)'}}
            railStyle={{background: 'white'}}
            onChange={(value) => speedFunc(value)}
        />
        </div>
    );
};

export default SpeedSlider