
export default function B1() {
    function calculate(a: number, b: number, callback: (result: number) => void){
        const sum: number = a + b;
        callback(sum);
    }
    calculate(8, 5, (result) => {console.log(`Kết quả phép cộng: ${result}`);
    })
  return (
    <div>B1</div>
  )
}
