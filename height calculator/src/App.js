
import './App.css';
import Navbar from './components/Navbar';
import ResultList from './components/ResultList';

const exampleResult = [
  {
    timeofsubmission: '2021-09-01T00:00:00.000Z',
    time: 1,
    height: 1,
  },
  {
    timeofsubmission: '2021-09-02T00:00:00.000Z',
    time: 2,
    height: 2,
  },
  {
    timeofsubmission: '2021-09-03T00:00:00.000Z',
    time: 3,
    height: 3,
  },
];
function App() {
  return (<>
    <Navbar/>
    <h1>
      hello world
    </h1>
    <ResultList
      results={exampleResult}
    />

  </>
  );
}

export default App;
