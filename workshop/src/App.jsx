import './index.css'
import {useState} from 'react'


const Color = ({color, setSelectedColor}) => {
    console.log(color)
    return (
    <div className={color} onClick={() => setSelectedColor(color)}></div>
    )
  }
const App = () => {

    const [seclectedColor, setSelectedColor] = useState("")

    return (
      <div id="container">
        <div id="navbar">
          <div>Currently selected: </div>
          <div className={seclectedColor}>{seclectedColor}</div>
        </div>
        <div id="colors-list">
            <Color color="red" setSelectedColor={setSelectedColor}/>
            <Color color="orange" setSelectedColor={setSelectedColor}/>
            <Color color="yellow" setSelectedColor={setSelectedColor}/>
            <Color color="green" setSelectedColor={setSelectedColor}/>
            <Color color="blue" setSelectedColor={setSelectedColor}/>
            <Color color="violet" setSelectedColor={setSelectedColor}/>
            <Color color="black" setSelectedColor={setSelectedColor}/>
            <Color color="white" setSelectedColor={setSelectedColor}/>
        </div>
      </div>
    );
  };
  
  export default App;