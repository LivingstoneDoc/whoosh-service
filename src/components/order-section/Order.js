import descrPic from '../../assets/img/order-section/video.png';
import sendInfo from '../../assets/icons/order-section/send-info.svg';
import bicycleIcon from '../../assets/icons/order-section/bicycle.svg';
import stickyManIcon from '../../assets/icons/order-section/sticky-man.svg';
import carIcon from '../../assets/icons/order-section/car.svg';
import truckIcon from '../../assets/icons/order-section/truck.svg';
import pickupLocationIcon from '../../assets/icons/order-section/pickup-location.svg';
import routeDotsIcon from '../../assets/icons/order-section/route-dots.svg';
import dropLocationIcon from '../../assets/icons/order-section/drop-location.svg';
import searchIcon from '../../assets/icons/order-section/search-simple.svg';
import './order.scss';

function Order() {
    return (
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
            <div className='inputs'>
              <div className='inputWrapper pickup'>
                <img className='inputIcon' src={pickupLocationIcon} alt='pickup-icon'/>
                <div className='labelAndInput'>
                  <label className='label'>Pickup location</label>
                  <input className='input' type='text' placeholder='location'/>
                </div>
              </div>
              <img className='routeIcon' src={routeDotsIcon} alt='route-icon'/>
              <div className='inputWrapper drop'>
                <img className='inputIcon' src={dropLocationIcon} alt='drop-icon'/>
                <div className='labelAndInput'>
                  <label className='label'>Drop location</label>
                  <input className='input' type='text' placeholder='location'/>
                </div>
              </div>
            </div>
            <button className='orderBtn'>Order</button>
            <button className='clearAllBtn'>Clear All</button>
          </form>
          <form className='order_rightSide__trackPackage'>
            <div className='orderSubtitle'>Track a package</div>
            <div className='inputAndIcon'>
              <input className='trackPackageInput' type='text' placeholder='Enter code'/>
              <button className='searchBtn'><img className='searchIcon' src={searchIcon} alt='search-icon'/></button>
            </div>
          </form>
        </div>
      </section>
    )
}
export default Order;