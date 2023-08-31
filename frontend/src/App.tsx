import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


interface demoResponseJson {
    headerText: string,
    bodyText: string,
}
function App() {

    const [json, setJson] = useState<demoResponseJson>();

    async function fetchContent() {
        const response = await fetch("/api/")
        return await response.json();
    }

    useEffect(() => {
        fetchContent().then(res => setJson(res));
    }, []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{json?.headerText}</h1>
          <p>{json?.bodyText}</p>
      </header>
    </div>
  );
}

export default App;
