import { useState } from 'react';
import './App.css';

const DemoComponent = (props) => {
  return (
    <div>
      <div>Day la tuoi: {props.age}</div>
    <div>Day la ten: {props.displayName}</div>
    </div>
  );
};
function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Cee');

  const onIncreaseAge = () => {
    setAge(age + 1);
  };
  return (
    <div className='container'>
      <div>{age}</div>
      <div onClick ={onIncreaseAge}>Tang age len 1</div>
      <DemoComponent age={age} displayName={name} />
    </div>
    
  );
}

export default App;
