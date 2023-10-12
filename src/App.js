import Dad from './learn/map'
import Car from './learn/class';
import Lprops from './learn/props';
import DefaultButton from './learn/button';
import DisplayConditionals from './learn/conditionals'
import MyForm from './learn/form';

function App() {
  return (
    <>
      <Car />
      <Dad />
      <MyForm />
      <DefaultButton />
      <Lprops what="REACT" />
      <DisplayConditionals />
    </>
  );
}

export default App;
