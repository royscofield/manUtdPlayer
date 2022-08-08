import classNames from "classnames/bind";
import styles from './App.css'

import TabContent from "./components/Tabs/TabContent";

const cx = classNames.bind(styles)

function App() {
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('heading')}>Manchester United Player</h1>

      <TabContent />

    </div>
  );
}

export default App;
