import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
     <div className="App min-h-screen bg-gray-50">
  <Navbar />
  <div className="content">
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/create"><Create /></Route>
      <Route path="/blogs/:id"><BlogDetails /></Route>
      <Route path="*"><NotFound /></Route>
    </Switch>
  </div>
</div> 
    </BrowserRouter>
  );
}

export default App;



 
