import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Order from './components/order-section/Order';
import Advertising from './components/advertising-section/Advertising';
import Partners from './components/partners-section/Partners';
import Actions from './components/actions-section/Actions';
import Payment from './components/payment-section/Payment';
import Info from './components/info-section/Info';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (menuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpened]);

  return (
    <div className='container'>
      <Menu isOpen={menuOpened} onClose={() => setMenuOpened(false)}/>
      <Header onClickMenu={() => setMenuOpened(true)}/>
      <Order />
      <Advertising />
      <Partners />
      <Actions />
      <Payment />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
