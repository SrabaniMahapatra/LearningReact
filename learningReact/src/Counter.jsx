import React,{useState} from 'react'

//  function Counter () {
//   const [count,setCount]=useState(0);

//   function increase(){
//     setCount(count+1);
//   }
//     function decrease() {
//     if (count === 0) {
//       alert("Negative is not allowed");
//     } else {
//       setCount(count - 1);
//     }
//   }
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={increase =>setCount(count+1)}>Increase</button>   */ using arrow function
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   );
// }



function ColorChange() {
  const [color, setColor] = useState("white");

  function changeColor() {
    setColor("lightblue");
  }

  return (
    <div style={{ backgroundColor: color, height: "200px", padding: "20px" }}>
      <h2>Background Color Change</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ColorChange;


// export default Counter;

