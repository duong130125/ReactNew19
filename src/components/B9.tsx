
export default function B9() {
    function myFilter(array: number[], value: number, callback: Function) {
        const result: number[] = [];
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i], value, array)) {
                result.push(array[i]);
            }
        }
        return result;
    }
    
    const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];
    
    const callback = (element: number, value: number) => {
        return element === value;
    };
    
    console.log(myFilter(numbers, 2, callback)); 
    console.log(myFilter(numbers, 10, callback)); 
    
  return (
    <div>B9</div>
  )
}
