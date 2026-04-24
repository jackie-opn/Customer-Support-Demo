import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar'
import SidePanel from './SidePanel'

function App() {
  const [status, setStatus] = useState("loading"); // support "loading", "authenticated" and "error"

  // comment out whole useEffect for local UI testing
  useEffect(() => {
    // get parameter set
    let rawQuery = window.location.search.replace(/^\?/, '');

    if (!rawQuery && window.location.hash.includes("?")) {
      // when loads Sidepanel, query is after a hashtag because of hash router
      rawQuery = window.location.hash.split("?")[1];
    }

    if (!rawQuery) {
      setStatus("error");
      return; // short circuit
    }

    // verifiy signature
    const verifySignature = async () => {
      try {
        const backendUrl = import.meta.env.VITE_API_BASE_URL;

        const response = await fetch(`${backendUrl}/session/bootstrap`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {raw_query: rawQuery}
          )
        });

        if (response.ok) {
          setStatus("authenticated");
        } else {
          console.error("verification failed: ", response.body, ", with status code: ", response.status);
          setStatus("error");
        }
      } catch (error) {
        console.error("Error during verification: ", error);
        setStatus("error");
      }
    };

    verifySignature();

  }, []); // empty [] means run once when app starts

  // render logic
  if (status === 'loading') {
    return (
      <div style={{
        padding: '20px',
        fontFamily: 'system-ui, sans-serif',
        color: '#666'
        }}>
          Verifying Helpscout signature...
        </div>
    );
  }
  
  if (status === 'error') {
    return (
      <div style={{ 
        padding: '20px', 
        fontFamily: 'system-ui, sans-serif', 
        color: '#c93030', 
        fontWeight: 'bold' 
        }}>
        Unauthorized Access or Backend Unreachable.
      </div>
    );
  }

  // define the routes on authenticated status
  return (
    <HashRouter>
      <Routes>
        {/* The base url renders Sidebar component */}
        <Route path='/' element={<Sidebar />}></Route>

        {/* The /panel renders Sidepanel component, which is the AI summary lives at */}
        <Route path='/panel' element={<SidePanel />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;