import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);

  const login = () => {
    dispatch({ type: 'LOGIN', payload: { id: 'eunjin', pw: '12345' } });
  };

  const increase = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h3>
        {id} {pw}
      </h3>
      <h1>{count}</h1>
      <button onClick={login}>LOGIN</button>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
}

export default App;
