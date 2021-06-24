// 리액트의 Hooks 완벽 정복하기, https://velog.io/@velopert/react-hooks
import React, { useState } from 'react';
import Info from './Info'

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={ () => {
        setVisible(!visible);
      }}> { visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;