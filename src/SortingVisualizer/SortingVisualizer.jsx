import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import React from 'react';
import {getInsertionSortAnimations, getMergeSortAnimations, getSelectionSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';



const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

const INSERTION_SECONDARY = 'Aquamarine';

const SELECTION_SECONDARY_COLOR = 'yellow';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      NUMBER_OF_ARRAY_BARS: 150,
      BAR_WIDTH: (window.screen.width - 250)/(150) - 2,
      ANIMATION_SPEED_MS: 2,
    };
  }

  slider() {
    return 
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    const num = this.state.NUMBER_OF_ARRAY_BARS;
    for (let i = 0; i < num; i++) {
      array.push(randomIntFromInterval(5, window.screen.height - 250));
    }
    this.setState({ array:array });
  }

  setNumberOfBars(value) {
    const width = (window.screen.width - 250)/(value) - 2;
    this.setState({ NUMBER_OF_ARRAY_BARS: value, BAR_WIDTH: width});
    this.resetArray();
  }
  

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
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
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.state.ANIMATION_SPEED_MS * 2);
      }
    }
  }

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');
    
    for (let i = 0; i < animations.length; i += 3) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const [oneHeight, twoHeight] = animations[i + 1];
      const [oneColor, twoColor] = animations[i + 2];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;

      setTimeout(() => {
        const colors = [INSERTION_SECONDARY, SECONDARY_COLOR, PRIMARY_COLOR];
        barOneStyle.backgroundColor = colors[oneColor];
        barOneStyle.height = `${oneHeight}px`;
        barTwoStyle.backgroundColor = colors[twoColor];
        barTwoStyle.height = `${twoHeight}px`;
      }, i * this.state.ANIMATION_SPEED_MS);
    };
    for (let i = 0; i < this.state.NUMBER_OF_ARRAY_BARS; i++) {
      arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
    };
    
  }

  selectionSort() {
  const animations = getSelectionSortAnimations(this.state.array);
  const arrayBars = document.getElementsByClassName('array-bar');
  const colors = [PRIMARY_COLOR, SELECTION_SECONDARY_COLOR, SECONDARY_COLOR];
  for (let i = 0; i < animations.length; i++) {
    const [barIdx, newHeight, barColor] = animations[i];
    const barStyle = arrayBars[barIdx].style;

    setTimeout(() => {
      barStyle.backgroundColor = colors[barColor];
      barStyle.height = `${newHeight}px`;
    }, i * this.state.ANIMATION_SPEED_MS);
  }
  }

  quickSort() {
  }





  render() {
    const {array} = this.state;
    const {BAR_WIDTH} = this.state;
    return (
      <div>
      <header>
      <nav className='top-bar'>  
      <div className="slide-container">
          <p>Change Number of Bars & Sorting Speed </p>
          <input type="range" min="20" max="310" value={this.state.NUMBER_OF_ARRAY_BARS} className="slider" id="myRange" onChange={changeEvent => this.setNumberOfBars(changeEvent.target.value)}>
          </input>
        </div>
        <div className='head-bar'></div>
        <ul> 
          <li>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
          </li>
          <li>
            <button onClick={() => this.insertionSort()}>Insertion Sort</button>
          </li>
          <li>
            <button onClick={() => this.selectionSort()}>Selection Sort</button>
          </li>
          <li>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
          </li>
          
        </ul>
        <div className='head-bar'></div>
        <ul>
        <li>  
            <button onClick={() => this.resetArray()}>Generate New Array</button> 
          </li>
        </ul>
        <div className='head-bar'></div>
      </nav>  
      </header>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width: `${BAR_WIDTH}px`,
            }}></div>
        ))}
      </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}