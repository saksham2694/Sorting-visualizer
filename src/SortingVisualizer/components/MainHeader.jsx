import { Row } from 'antd';
import SizeSlider from './SizeSlider';
import SpeedSlider from './SpeedSlider';
import DropDown from './DropDown';
import { Icon } from '@iconify/react';

const MainHeader = (
    {
        generateFunc,
        speedFunc,
        sizeFunc,
        algorithms,
        currAlgo,
        setAlgo,
        doSort,
    }) => {
    return (
        <Row 
            style={{
                background: '#21262d',
                color: 'white',
                padding: '0.8vw 0px 0.8vw 0px',
                width: '100%',
                boxShadow: '0px -2px 4px 0px white',
            }}
            align="middle"
            justify="space-around"
        >
            <div style={{
                    fontFamily: 'Georgia',
                    color: 'white',
                    fontSize: '250%',
            }}>
                Sorting Visualizer
            </div>
            <DropDown 
                algorithms={algorithms}
                currAlgo={currAlgo}
                setFunc={setAlgo}
            />
            <SizeSlider
                sizeFunc={sizeFunc}
            />
            <SpeedSlider
                speedFunc={speedFunc}
            />
            <div>
                <button 
                    style={{
                        width: 100,
                        height: 35,
                        background: '#3fb950',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        fontWeight: 'bold',
                        cursor:'pointer'}}
                    onClick={generateFunc}>Reset Array</button>
            </div>
            <div>
                <button 
                    style={{
                        width: 120,
                        height: 35,
                        background: '#21262d',
                        color: 'white',
                        border: 'none',
                        fontWeight: 'bold',
                        cursor:'pointer'}}
                    
                    onClick={doSort}>
                        <div 
                        style={{
                            height: 18,
                    width: 70,
                    padding: 10,
                    fontWeight: 'bold',
                    background: '#3fb950',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    cursor: 'pointer',
                    borderRadius: '10px',
                        }}>
                        <p>Sort</p>
                        <Icon 
                            icon="ant-design:play-circle-outlined"
                            width={25}/>
                        </div>
                        </button>
            </div>
            
            
        </Row>
    )
};

export default MainHeader