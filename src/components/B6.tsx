
export default function B6() {
    function task1(callback: () => void): void {
        console.log("Bắt đầu task1");
        setTimeout(() => {
            console.log("Kết thúc task1");
            callback();
        }, 1000);
    }
    
    function task2(callback: () => void): void {
        console.log("Bắt đầu task2");
        setTimeout(() => {
            console.log("Kết thúc task2");
            callback();
        }, 1500);
    }
    
    function task3(): void {
        console.log("Bắt đầu task3");
        setTimeout(() => {
            console.log("Kết thúc task3");
        }, 2000);
    }
    
    function executeSequentially(): void {
        task1(() => {
            task2(() => {
                task3();
            });
        });
    }
    
    // Gọi hàm executeSequentially để thực thi chuỗi các task
    executeSequentially();
  return (
    <div>B6</div>
  )
}
