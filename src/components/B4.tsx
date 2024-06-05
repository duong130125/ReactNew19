
export default function B4() {
    function displayNumbers(callback: (num: number) => void, delay: number): void {
        let num = 1;
    
        setInterval(() => {
            callback(num);
            num++;
        }, delay);
    }
    
    
    displayNumbers( (num) => {console.log(`Phần tử thứ: ${num}`);
    }, 1000);
  return (
    <div>B4</div>
  )
}
