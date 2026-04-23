import { HashRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import SidePanel from './SidePanel'

function App() {
  // define the routes
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