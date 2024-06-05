
export default function B5() {
    function checkCondition(condition: boolean, callback: (result: boolean) => void) {
        setTimeout(() => {
            callback(condition);
        }, 1000);
    }
    checkCondition(true, (result) => {console.log(`Điều kiện trả về: ${result}`);
    })
  return (
    <div>B5</div>
  )
}
