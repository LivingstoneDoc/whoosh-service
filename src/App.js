import logo from './assets/icons/header/logo.svg';
import pin from './assets/icons/header/pin.svg';
import lock from './assets/icons/header/lock.svg';

import descrPic from './assets/img/order-section/video.png';
import sendInfo from './assets/icons/order-section/send-info.svg';
import bicycleIcon from './assets/icons/order-section/bicycle.svg';
import stickyManIcon from './assets/icons/order-section/sticky-man.svg';
import carIcon from './assets/icons/order-section/car.svg';
import truckIcon from './assets/icons/order-section/truck.svg';

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <div className='header_leftSide'>
          <div className='header_leftSide__logo'><img src={logo} alt='logo'/></div>
            <button className='header_leftSide__locationBtn headerBtn'><img src={pin} alt='pin-icon'/>NY, Manhattan</button>
        </div>
        <div className='header_inputWrapper'>
        <input className='header_inputWrapper__input' type='text' placeholder='Track a Package'/>
        <button className='header_inputWrapper__btn'>
          <svg className='inputBtnIcon' width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 
              0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7 12.6667C10.2217 12.6667 12.6667 10.2217 12.6667 7C12.6667 3.77834 
              10.2217 1.33333 7 1.33333C3.77834 1.33333 1.33333 3.77834 1.33333 7C1.33333 10.2217 3.77834 12.6667 7 12.6667Z" 
              fill="currentColor"
            />
            <path d="M7.33331 10L10.6666 8.66671V5.33337L7.33331 6.51259V10Z" fill="currentColor"/>
            <path d="M6.66669 10L3.33335 8.66671V5.33337L6.66669 6.51259V10Z" fill="currentColor"/>
            <path d="M6.99998 3.33337L3.33331 4.66671L6.99998 6.00004L10.6666 4.66671L6.99998 3.33337Z" fill="currentColor"/>
            <path d="M11.9523 11L16 15.0477L15.0477 16L11 11.9523L11.9523 11Z" fill="currentColor"/>
          </svg>
        </button>
        </div>
        <div className='header_rightSide'>
          <button className='header_rightSide__parcelBtn headerBtn'>Send a Parcel</button>
          <button className='header_rightSide__courierBtn headerBtn'>Become a Courier</button>
          <button className='header_rightSide__authBtn'><img src={lock} alt='auth'/></button>
        </div>
      </header>

      <section className='order'>
        <div className='order_leftSide'>
          <article className='order_leftSide__serviceIntro'>
            <h1 className='title'>Our service started work in New York</h1>
            <p className='descr'>We make delivery exactly at the time you need - 
              we can start to fulfill the order a few minutes after it arrives, 
              or we can deliver on a specific day and hour.
            </p>
            <button className='readMoreBtn'>Read more</button>
          </article>
          <article className='order_leftSide__serviceVideo'>
            <div className='orderSubtitle'>How it works</div>
            <img className='descrPic' src={descrPic} alt='descr-pic'/>
          </article>
        </div>
        <div className='order_rightSide'>
          <form className='order_rightSide__sendParcel'>
            <div className='subtitleInfoWrapper'>
              <div className='orderSubtitle'>Send a Parcel</div>
              <img className='sendInfo' src={sendInfo} alt='send-info'/>
            </div>
            <div className='tabs'>
                <button className='tabs_leftTabBtn tabBtn inactiveTabBtn'>
                  <div className='tabs_leftTabBtn__leftTabIconsWrapper'>
                    <img className='tabIcon' src={bicycleIcon} alt='bicycle-icon'/>
                    <img className='tabIcon' src={stickyManIcon} alt='on-foot-icon'/>
                  </div>
                  <span className='tabSign'>up to 10lb</span>
                </button>
                <button className='tabs_middleTabBtn tabBtn activeTabBtn'>
                  <img className='tabIcon' src={carIcon} alt='car-icon'/>
                  <span className='tabSign'>up to 130lb</span>
                </button>
                <button className='tabs_rightTabBtn tabBtn inactiveTabBtn'>
                  <img className='tabIcon' src={truckIcon} alt='truck-icon'/>
                  <span className='tabSign'>over 130lb</span>
                </button>
            </div>
          </form>
          <form className='order_rightSide__trackPackage'></form>
        </div>
      </section>
    </div>
  );
}

export default App;
