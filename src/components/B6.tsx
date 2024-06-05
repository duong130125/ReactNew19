
export default function B6() {
    function task1(callback: () => void) {
        setTimeout(() => {
            console.log("task1 được thực thi");
            callback();
        }, 1000);
    }
    
    function task2(callback: () => void) {
        setTimeout(() => {
            console.log("task2 được thực thi");
            callback();
        }, 1500);
    }
    
    function task3() {
        setTimeout(() => {
            console.log("task3 được thực thi! Hoàn thành");
        }, 2000);
    }
    
    function executeSequentially() {
        task1(() => {
            task2(() => {
                task3();
            });
        });
    }
    executeSequentially();
  return (
    <div>B6</div>
  )
}
