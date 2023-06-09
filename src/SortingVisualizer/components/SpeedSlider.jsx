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
                color: 'white',
                fontSize: '120%'}}>Sort Speed</div>
        <Slider
            defaultValue={41}
            min={1}
            max={50}
            step={1}
            style={{width: 150}}
            handleStyle={{borderColor: 'rgb(24, 32, 42)'}}
            trackStyle={{background: '#3fb950'}}
            railStyle={{background: 'white'}}
            onChange={(value) => speedFunc(value)}
        />
        </div>
    );
};

export default SpeedSlider