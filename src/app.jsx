import React from "react";
class Button extends React.Component {
  render(){
  return (
    <button
          className="h-10 px-6 font-semibolt rounded-md bg-red-500 text-white"
          type="submit"
        >
          Beli Sekarang
        </button>
  
  );
}
}
function ButtonYellow() {
  return (
    <button
          className="h-10 px-6 font-semibolt rounded-md bg-yellow-500 text-white"
          type="submit"
        >
          Beli Sekarang
        </button>
  );
}
function ButtonGreen() {
  return (
    <button
          className="h-10 px-6 font-semibolt rounded-md bg-green-500 text-white"
          type="submit"
        >
          Beli Sekarang
        </button>
  );
}
function App() {
return (
    <div className="flex justify-center bg-purple-400 min-h-screen items-center">
      <div>
        <Button></Button>
        <Button></Button>
        <ButtonYellow></ButtonYellow>
        <ButtonGreen></ButtonGreen>
      </div>
    </div>
  );
}

export default App;