import Button from './components/Button';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Card title="sandeep kaur" content="hello" />
        <Card title="sukhjit kaur" content="good morning" />
        <Button label="Click Me" onClick={handleClick} />
      </div>
      <Footer />
    </div>
  );
}


export default App;