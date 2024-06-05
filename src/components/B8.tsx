
export default function B8() {
    function myFind(array: number[], value: number, callback:Function) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i], value, array)) {
                return array[i];
            }
        }
        return null;
    }
    
    const numbers: number[] = [1, 2, 3, 4, 5, 6];
    
    const callback = (element: number, value: number) => {
        return element === value;
    };
    
    console.log(myFind(numbers, 2, callback));
    console.log(myFind(numbers, 10, callback));
    
  return (
    <div>B8</div>
  )
}
