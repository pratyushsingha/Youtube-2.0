import Navbar from './components/Navbar';
import Home from './components/Home';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <>

      <Navbar />
      <div className='flex space-x-6'>
        <Sidebar />
        <Home />

      </div>
    </>
  );
}

export default App;
