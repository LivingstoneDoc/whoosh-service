import cycleIcon from '../../assets/icons/advertising-section/cycle.svg';
import routeIcon from '../../assets/icons/advertising-section/route.svg';
import supportIcon from '../../assets/icons/advertising-section/support.svg';
import advCaseIcon from '../../assets/icons/advertising-section/case.svg';
import boxIcon from '../../assets/icons/divider/divider-box.svg';
import './advertising.scss';

function Advertising() {
    return (
        <section className='advertising'>
      <h2 className='subtitle'>Express delivery market revolution</h2>
      <p className='advertising_descr'>Express courier service in the city. We are a reliable 
        logistics partner for delivery services for online stores and restaurants!
      </p>
      <article className='advertising_bilboards'>
        <div className='advertising_bilboards__bilboard'>
          <h3 className='advSubtitle'>Become a Courier</h3>
          <div className='advIconsWrapper'>
            <div className='iconBackground'><img className='bilboardIcon' src={cycleIcon} alt='cycle'/></div>
            <img className='bilboardRouteIcon' src={routeIcon} alt='route'/>
          </div>
          <p className='advDescr'>You choose a schedule. You decide how much and when to earn. Earnings from day one</p>
        </div>
        <div className='advertising_bilboards__bilboard'>
          <h3 className='advSubtitle'>Help & Support</h3>
            <div className='iconBackground'><img className='bilboardIcon' src={supportIcon} alt='cycle'/></div>
          <p className='advDescr'>You choose a schedule. You decide how much and when to earn. Earnings from day one</p>
        </div>
        <div className='advertising_bilboards__bilboard'>
          <h3 className='advSubtitle'>Affiliate Program</h3>
            <div className='iconBackground'><img className='bilboardIcon' src={advCaseIcon} alt='cycle'/></div>
          <p className='advDescr'>You choose a schedule. You decide how much and when to earn. Earnings from day one</p>
        </div>
      </article>
      <img className='dividerIcon' src={boxIcon} alt='box-icon'/>
    </section>
    )
}
export default Advertising;