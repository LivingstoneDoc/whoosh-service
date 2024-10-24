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
      <p className='sectionDescr'>Express courier service in the city. We are a reliable 
        logistics partner for delivery services for online stores and restaurants!
      </p>
      <article className='advertising_cards'>
        <div className='advertising_cards__card'>
          <h3 className='cardSubtitle'>Become a Courier</h3>
          <div className='advIconsWrapper'>
            <div className='iconBackground'><img className='cardIcon' src={cycleIcon} alt='cycle'/></div>
            <img className='cardRouteIcon' src={routeIcon} alt='route'/>
          </div>
          <p className='cardDescr'>You choose a schedule. You decide how much and when to earn. Earnings from day one</p>
        </div>
        <div className='advertising_cards__card'>
          <h3 className='cardSubtitle'>Help & Support</h3>
            <div className='iconBackground'><img className='cardIcon' src={supportIcon} alt='cycle'/></div>
          <p className='cardDescr'>You choose a schedule. You decide how much and when to earn. Earnings from day one</p>
        </div>
        <div className='advertising_cards__card'>
          <h3 className='cardSubtitle'>Affiliate Program</h3>
            <div className='iconBackground'><img className='cardIcon' src={advCaseIcon} alt='cycle'/></div>
          <p className='cardDescr'>You choose a schedule. You decide how much and when to earn. Earnings from day one</p>
        </div>
      </article>
      <img className='dividerIcon' src={boxIcon} alt='box-icon'/>
    </section>
    )
}
export default Advertising;