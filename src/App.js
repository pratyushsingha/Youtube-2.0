import Navbar from './components/Navbar';
import Home from './components/Home';
// import Sidebar from './components/Sidebar';



function App() {
  return (
    <>

      <Navbar />
      {/* <div className='flex space-x-1'>
        <Sidebar />
        <Home />
      </div> */}
      <Home />
    </>
  );
}

export default App;
