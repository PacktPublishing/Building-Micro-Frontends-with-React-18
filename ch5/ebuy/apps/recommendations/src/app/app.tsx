// eslint-disable-next-line @typescript-eslint/no-unused-vars
import 'semantic-ui-css/semantic.min.css';
import useStore from 'store/Module';
export function App() {
  const { count, reset } = useStore();
  return (
    <div className="ui raised segment">
      <h1>Recommendations</h1>
      <p>Recommendations goes here</p>
      <p> {count} people liked the recommendations</p>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
