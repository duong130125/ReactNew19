
export default function B2() {
    function delayedCallback(callback: Function, delay: number) {
        setTimeout(callback, delay);
    }
    
    delayedCallback(() => {console.log("Hello Thầy!!!");
    }, 2000);
  return (
    <div>B2</div>
  )
}
