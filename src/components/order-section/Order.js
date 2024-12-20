import React, { useState } from 'react';
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
  const [activeBtn, setActiveBtn] = useState(2);
  const tabBtnClick = (buttonId) => {
    setActiveBtn(buttonId);
  }

  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropLocation: '',
  });

  const changeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const resetForm = () => {
    setFormData({ pickupLocation: '', dropLocation: '' });
  };
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
            <div className='serviceVideoDots'>
              <span className='serviceVideoDot activeDot'></span>
              <span className='serviceVideoDot inactiveDot'></span>
              <span className='serviceVideoDot inactiveDot'></span>
              <span className='serviceVideoDot inactiveDot'></span>
            </div>
          </article>
        </div>
        <div className='order_rightSide'>
          <form className='order_rightSide__sendParcel' onSubmit={submitForm}>
            <div className='subtitleInfoWrapper'>
              <div className='orderSubtitle'>Send a Parcel</div>
              <img className='sendInfo' src={sendInfo} alt='send-info'/>
            </div>
            <div className='tabs'>
                <button type='button' className={`tabs_leftTabBtn tabBtn ${activeBtn === 1 ? 'activeTabBtn' : 'inactiveTabBtn'}`} 
                  onClick={() => tabBtnClick(1)}>
                  <div className='tabs_leftTabBtn__leftTabIconsWrapper'>
                    <img className='tabIcon' src={bicycleIcon} alt='bicycle-icon'/>
                    <div className='iconDivider'></div>
                    <img className='tabIcon' src={stickyManIcon} alt='on-foot-icon'/>
                  </div>
                  <span className='tabSign'>up to 10lb</span>
                </button>
                <button type='button' className={`tabs_middleTabBtn tabBtn ${activeBtn === 2 ? 'activeTabBtn' : 'inactiveTabBtn'}`} 
                  onClick={() => tabBtnClick(2)}>
                  <img className='tabIcon' src={carIcon} alt='car-icon'/>
                  <span className='tabSign'>up to 130lb</span>
                </button>
                <button type='button' className={`tabs_rightTabBtn tabBtn ${activeBtn === 3 ? 'activeTabBtn' : 'inactiveTabBtn'}`} 
                  onClick={() => tabBtnClick(3)}>
                  <img className='tabIcon' src={truckIcon} alt='truck-icon'/>
                  <span className='tabSign'>over 130lb</span>
                </button>
            </div>
            <div className='inputs'>
              <div className='inputWrapper pickup'>
                <img className='inputIcon' src={pickupLocationIcon} alt='pickup-icon'/>
                <div className='labelAndInput'>
                  <label className='label'>Pickup location</label>
                  <input className='input' type='text' placeholder='location' required 
                    name="pickupLocation" value={formData.pickupLocation} onChange={changeForm}/>
                </div>
              </div>
              <img className='routeIcon' src={routeDotsIcon} alt='route-icon'/>
              <div className='inputWrapper drop'>
                <img className='inputIcon' src={dropLocationIcon} alt='drop-icon'/>
                <div className='labelAndInput'>
                  <label className='label'>Drop location</label>
                  <input className='input' type='text' placeholder='location' required 
                    name="dropLocation" value={formData.dropLocation} onChange={changeForm}/>
                </div>
              </div>
            </div>
            <button type='submit' className='orderBtn'>Order</button>
            <button type='button' className='clearAllBtn' onClick={resetForm}>Clear All</button>
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