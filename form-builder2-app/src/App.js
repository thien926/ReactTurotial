import DemobarComponent from './components/demobar-component';
import FormBuilderComponent from './components/form-builder-component';
import * as variables from './variables';

function App() {
  return (
    <>
      <DemobarComponent variables={variables}/>
      <FormBuilderComponent />
    </>
  );
}

export default App;
