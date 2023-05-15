import { Row } from 'antd';
import SizeSlider from './SizeSlider';
import SpeedSlider from './SpeedSlider';

const MainHeader = (
    {
        mergeFunc,
        insertFunc,
        selectFunc,
        quickFunc,
        generateFunc,
        speedFunc,
        sizeFunc,
    }) => {
    return (
        <Row 
            style={{
                background: 'rgb(225, 173, 1)',
                color: 'white',
                padding: '0.8vw 0px 0.8vw 0px',
                width: '100%',
            }}
            align="middle"
            justify="space-around"
        >
            <SizeSlider
                sizeFunc={sizeFunc}
            />
            <SpeedSlider
                speedFunc={speedFunc}
            />
            <div style={{
                    borderLeft: '0.4vw solid rgb(24, 32, 42)',
                    height: '100%',
            }}></div>
            <div>
                <button 
                    style={{
                        background: 'rgb(225, 173, 1)',
                        color: 'rgb(24, 32, 42)',
                        fontFamily: 'Georgia',
                        fontWeight: 'bold', 
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '150%'}}
                    onClick={mergeFunc}>Merge Sort</button>
            </div>
            <div>
                <button
                    style={{
                        background: 'rgb(225, 173, 1)',
                        color: 'rgb(24, 32, 42)',
                        fontFamily: 'Georgia',
                        fontWeight: 'bold', 
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '150%',}}
                    onClick={insertFunc}>Insertion Sort</button>
            </div>
            <div>
                <button
                    style={{
                        background: 'rgb(225, 173, 1)',
                        color: 'rgb(24, 32, 42)',
                        fontFamily: 'Georgia',
                        fontWeight: 'bold', 
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '150%'}}
                    onClick={selectFunc}>Selection Sort</button>
            </div>
            <div>
                <button
                    style={{
                        background: 'rgb(225, 173, 1)',
                        color: 'rgb(24, 32, 42)',
                        fontFamily: 'Georgia',
                        fontWeight: 'bold', 
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '150%'}}
                    onClick={quickFunc}>Quick Sort</button>
            </div>
            <div style={{
                    borderLeft: '0.4vw solid rgb(24, 32, 42)',
                    height: '100%',
            }}></div>
            <div>
                <button 
                    style={{
                        background: 'rgb(225, 173, 1)',
                        color: 'rgb(24, 32, 42)',
                        fontFamily: 'Georgia',
                        fontWeight: 'bold', 
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '150%'}}
                    onClick={generateFunc}>Generate New Array</button>
            </div>
            
        </Row>
    )
};

export default MainHeader