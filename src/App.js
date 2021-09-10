import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Link,Switch,Route} from 'react-router-dom';
import People from './components/People';
import Planet from './components/Planet';
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function App() {
    const [name, setName] = useState('people');
    const [id, setId] = useState('');
    const history = useHistory();

    const handleSubmit = e =>{
      e.preventDefault()
      console.log(name);
      console.log(id);

      (name&&id)?history.push(`/${name}/${id}`):alert('Please enter option and id')
  }
  return (

    <div className="App">
      

      <h1>DutTech.org</h1>

      <form onSubmit={handleSubmit}>
                {/* <label>People */}
                    <select value={name}
                        onChange={
                            e => {
                                setName(e.target.value)
                            }
                        }>
                        <option value='people'>
                            People
                        </option>
                        <option value='planets'>
                            Planets
                        </option>
                    </select>
                {/* </label> */}
                <label> ID:
                    <input type="number" 
                        onChange = {
                            e => {
                                setId(e.target.value)
                            }
                        }
                        value={id}/>
                </label>
                <button>Search</button>
            </form>


      {/* <p>
        <Link to="/home">home</Link>
      </p> */}
      <Switch>
        {/* <Route exact path="/home">
          <h1>Welcome</h1>
        </Route> */}

        {/* <Route exact path="/:greeting">
          <Home/>
        </Route>

        <Route exact path="/:greeting/:textCol/:backCol">
          <Home/>
        </Route> */}

        <Route exact path="/people/:idVar">
          <People />
        </Route>

        <Route exact path="/planets/:planetId">
          <Planet/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
