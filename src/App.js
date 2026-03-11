import MyPage from './Components/My_Page';
import Alert from './Components/Alert';
import { useState } from 'react';
import './Components/CSS/container.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setalert] = useState({
    main_messages: null,
    message: null,
    num_of_words: null
  });

  const setting_alert = (main_messages, message, num_of_words) => {
    setalert({
      main_messages,
      message,
      num_of_words
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/header"
          element={<MyPage alert={setting_alert} />}
        />

        <Route
          path="/"
          element={<></>}
        />
      </Routes>
      <Link to={'/header'}><button className='submit m-all'>Header</button></Link>
      <Link to={'/'}><button className='submit m-all'>Home</button></Link>
      <Alert
        MainMessage={alert.main_messages}
        Message={alert.message}
        num_of_words={alert.num_of_words}
      />
    </Router>
  );
}

export default App;