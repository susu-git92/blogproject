import React from 'react'; 
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history}  from './store';
import MyRouter from'./routes/Router';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';

const App=()=> {
  return (
    <Provider store={store}>
      <Router>
      {/* <ConnectedRouter history={history}> */}
        <MyRouter />
      {/* </ConnectedRouter> */}
      </Router>
    </Provider>
  )
}
export default App;
