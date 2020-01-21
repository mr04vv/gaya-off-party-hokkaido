import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Top from './sections/Top';
import Detail from './sections/Detail';
import Member from './sections/Member';
import Content from './sections/Content';
import { AllRightReserved } from './components/style';

const App: React.FC = () => {
  return (
    <div>
      <Top />
      <Detail />
      <Content />
      <Member />
      <AllRightReserved>
        © 2020 @akkun_dayooo All Rights Reserved. Designed by{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://mooriii.com">
          @akkun_dayooo
        </a>
      </AllRightReserved>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
