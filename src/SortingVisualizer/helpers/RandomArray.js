export default function generateArray(size){
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor((Math.random() * (300 - 10) + 10)));
    }
    return array;
}