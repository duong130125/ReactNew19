
export default function B3() {
    function processArray(arr: number[], callback: (item: number) => void) {
        arr.forEach((item, index) => {
            setTimeout(() => {
                callback(item);
            }, (index + 1) * 1000);
        });
    }
    
    const numbers: number[] = [1, 2, 3, 4, 5];
    processArray(numbers, (item) => {console.log(`Phần tử thứ: ${item}`);
    });
  return (
    <div>B3</div>
  )
}
