import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import React from 'react';
import getMergeSortAnimations from '../sortingAlgorithms/MergeSort.js';
import getInsertionSortAnimations from'../sortingAlgorithms/InsertionSort.js';
import getSelectionSortAnimations from'../sortingAlgorithms/SelectionSort.js';
import getQuickSortAnimations from'../sortingAlgorithms/QuickSort.js';
import generateArray from './helpers/RandomArray.js';
import MainHeader from './components/MainHeader.jsx'


const PRIMARY_COLOR = 'rgb(227, 236, 235)';

const SECONDARY_COLOR = 'red';

const INSERTION_SECONDARY = 'Aquamarine';

const SELECTION_SECONDARY_COLOR = 'yellow';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      NUMBER_OF_ARRAY_BARS: 100,
      ANIMATION_SPEED_MS: 10,
      maxItem: 0,
    };
  }

  setSpeed(newspeed) {
    const speed = 51 - newspeed;
    this.setState({ ANIMATION_SPEED_MS:speed });
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const num = this.state.NUMBER_OF_ARRAY_BARS;
    const array = generateArray(num);
    const max = Math.max(...array);
    this.setState({ array:array , maxItem:max });
  }

  setNumberOfBars(value) {
    this.setState({ NUMBER_OF_ARRAY_BARS:value });
    this.resetArray();
  }
  

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    const {maxItem} = this.state;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.ANIMATION_SPEED_MS * 2);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const height = (newHeight / maxItem) * 100;
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `calc(${height}% - 20px)`;
        }, i * this.state.ANIMATION_SPEED_MS * 2);
      }
    }
  }

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');
    const {maxItem} = this.state;
    for (let i = 0; i < animations.length; i += 3) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const [oneHeight, twoHeight] = animations[i + 1];
      const [oneColor, twoColor] = animations[i + 2];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const oneRealHeight = (oneHeight / maxItem) * 100;
      const twoRealHeight = (twoHeight / maxItem) * 100;
      setTimeout(() => {
        const colors = [INSERTION_SECONDARY, SECONDARY_COLOR, PRIMARY_COLOR];
        barOneStyle.backgroundColor = colors[oneColor];
        barOneStyle.height = `calc(${oneRealHeight}% - 20px)`;
        barTwoStyle.backgroundColor = colors[twoColor];
        barTwoStyle.height = `calc(${twoRealHeight}% - 20px)`;
      }, i * this.state.ANIMATION_SPEED_MS);
    };
    for (let i = 0; i < this.state.NUMBER_OF_ARRAY_BARS; i++) {
      arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
    };
    
  }

  selectionSort() {
  const animations = getSelectionSortAnimations(this.state.array);
  const {maxItem} = this.state;
  const arrayBars = document.getElementsByClassName('array-bar');
  const colors = [PRIMARY_COLOR, SELECTION_SECONDARY_COLOR, SECONDARY_COLOR];
  
  for (let i = 0; i < animations.length; i++) {
    const [barIdx, newHeight, barColor] = animations[i];
    const barStyle = arrayBars[barIdx].style;
    const height = (newHeight / maxItem) * 100;

    setTimeout(() => {
      barStyle.backgroundColor = colors[barColor];
      barStyle.height = `calc(${height}% - 20px)`;
    }, i * this.state.ANIMATION_SPEED_MS);
  }
  }

  quickSort() {
  const animations = getQuickSortAnimations(this.state.array);
  const {maxItem} = this.state;
  const arrayBars = document.getElementsByClassName('array-bar');
  const colors = [PRIMARY_COLOR, SELECTION_SECONDARY_COLOR, SECONDARY_COLOR];
  for (let i = 0; i < animations.length; i++) {
    const [barIdx, newHeight, barColor] = animations[i];
    const barStyle = arrayBars[barIdx].style;
    const height = (newHeight / maxItem) * 100;
    setTimeout(() => {
      barStyle.backgroundColor = colors[barColor];
      barStyle.height = `calc(${height}% - 20px)`;
    }, i * this.state.ANIMATION_SPEED_MS);
  }
  }





  render() {
    const {array} = this.state;
    const {maxItem} = this.state;
    const len = array.length;
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh'}}>
        <MainHeader 
          mergeFunc={() => this.mergeSort()}
          insertFunc={() => this.insertionSort()}
          selectFunc={() => this.selectionSort()}
          quickFunc={() => this.quickSort()}
          generateFunc={() => this.resetArray()}
          speedFunc={(value) => this.setSpeed(value)}
          sizeFunc={(value) => this.setNumberOfBars(value)}/>
        
        <div
        style={{
          backgroundColor: 'rgb(50, 65, 88)',
          display: 'flex',
          height: '100%',
          width: '100vw',
          flexDirection: 'row',
          alignItems: 'end',
          padding: '0px 0px 0px 0px',
        }}
      >
        {array.map((value, idx) => {
          const height = (value / maxItem) * 100;
          const width = (1 / len) * 100;
          return (
            <div
              key={idx}
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'end',
                width: `${width}%`,
              }}
            >
              <div 
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `calc(${height}% - 20px)`,
                  width: '100%',
                  margin: 'auto 10% 0 10%'
                }}
              >
              </div>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}