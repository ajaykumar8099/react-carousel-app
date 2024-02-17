
import Header  from '../Header';
import Products from "../Products"
import './index.css';

const App = () => {
  

  return (
    <>
       <Header/>
      <div className='bg-container'>
        <Products/>
      </div>
    </>
  );
};

export default App;
