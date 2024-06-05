
export default function B10() {
    function myFindIndex(arr: number[], item: number, callback: Function) {
        let index = -1;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === item) {
            index = i;
            break;
          }
        }
        callback(index);
      }

      myFindIndex([1, 2, 3, 4, 5, 2], 2, (index) => {
        console.log(index);
      });
  return (
    <div>B10</div>
  )
}
