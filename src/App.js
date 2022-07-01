import './App.scss';

function App() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className="App">
      <button className="Button" type="button" onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
