import './App.css';
import InputContainer from './components/InputContainer';
import Mapcomponent from './components/Mapcomponent';

function App() {
   return (
    <div className="App flex h-screen">
      <Mapcomponent className="flex-2 w-2/3 h-full"/>
      <InputContainer className="flex-1 w-1/3 h-full p-4 overflow-y-auto"/>
    </div>
  );
}

export default App;
