import { InputGroups } from './components/main/progress/stepForms/elementGroups/InputGroups';
import { SelectGroups } from './components/main/progress/stepForms/elementGroups/SelectGroups';

const titleOptions = [
  {value:'mr.',
   name:'先生'
  },
  {
    value:'ms.',
    name:'小姐'
  },
  {
    value:'mx.',
    name:'不明'
  }
]

function App() {
  return (
    <div className="App">
      <SelectGroups 
      label='稱謂'
      options={titleOptions} />
      <InputGroups 
      label='姓名'
      placeholder='請輸入姓名'
      type='text'
      />
    </div>
  );
}

export default App;
