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
    message: null
  });

  const setting_alert = (main_messages, message) => {
    setalert({
      main_messages,
      message
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
      />
    </Router>
  );
}

export default App;