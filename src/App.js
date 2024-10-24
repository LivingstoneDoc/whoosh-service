import Header from './components/header/Header';
import Order from './components/order-section/Order';
import Advertising from './components/advertising-section/Advertising';
import Partners from './components/partners-section/Partners';

function App() {
  return (
    <div className='container'>
      <Header />
      <Order />
      <Advertising />
      <Partners />
    </div>
  );
}

export default App;
