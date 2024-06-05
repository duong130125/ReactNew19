
export default function B7() {
    function myForEach(array: number[], callback: Function) {
        for (let i = 0; i < array.length; i++) {
          setTimeout(() => {
            callback(i, array[i], array);
          })
        }
    }

    const numbers: number[] = [1, 2, 3, 4, 5, 6];
    
    myForEach(numbers, (index, value, array) => {
        console.log(`Vị trí: ${index} | Phần tử: ${value} | Mảng: ${array}`);
    });
    
  return (
    <div>B7</div>
  )
}
