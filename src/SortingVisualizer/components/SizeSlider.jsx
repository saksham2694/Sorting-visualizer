import {Slider} from 'antd';
import React from 'react';

const SizeSlider = ({sizeFunc}) => {
    return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
        }}
    >
        <div style={{
                fontWeight: 'bold',
                fontFamily: 'Georgia', 
                color: 'rgb(24, 32, 42)',
                fontSize: '120%'}}>Array Size</div>
        <Slider
            min={20}
            defaultValue={100}
            step={5}
            max={400}
            style={{width: 150}}
            handleStyle={{borderColor: 'rgb(24, 32, 42)'}}
            trackStyle={{background: 'rgb(24, 32, 42)'}}
            railStyle={{background: 'white'}}
            onChange={(value) => sizeFunc(value)}
        />
        </div>
    );
};

export default SizeSlider