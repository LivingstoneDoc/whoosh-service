import Header from './components/header/Header';
import Order from './components/order-section/Order';
import Advertising from './components/advertising-section/Advertising';
import Partners from './components/partners-section/Partners';
import Actions from './components/actions-section/Actions';
import Payment from './components/payment-section/Payment';
import Info from './components/info-section/Info';

function App() {
  return (
    <div className='container'>
      <Header />
      <Order />
      <Advertising />
      <Partners />
      <Actions />
      <Payment />
      <Info />
    </div>
  );
}

export default App;
