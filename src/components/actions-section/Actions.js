import calcIcon from '../../assets/icons/actions-section/calc.svg';
import paperworkIcon from '../../assets/icons/actions-section/paperwork.svg';
import paymentIcon from '../../assets/icons/actions-section/payment.svg';
import cityImg from '../../assets/img/actions-section/city.png';
import './actions.scss';

function Actions() {
    return (
        <section className='actions'>
        <h2 className='subtitle'>What we do</h2>
        <p className='sectionDescr'>
          Express courier service in the city. 
          We are a reliable logistics partner 
          for delivery services for online stores and restaurants!
        </p>
        <div className='actions_cards'>
          <div className='actions_cards__card'>
            <div className='iconBackground'>
              <img src={calcIcon} alt='calc-icon'/>
            </div>
            <h3 className='cardSubtitle actionSubtitle'>
              Online 
              <a href='#' className='calculation'>calculation</a>
            </h3>
            <p className='cardDescr'>
              Instant calculation of the cost in the order form, 
              the price is updated in the process of filling out the form
            </p>
          </div>
          <div className='actions_cards__card'>
            <div className='iconBackground'>
              <img src={paperworkIcon} alt='calc-icon'/>
            </div>
            <h3 className='cardSubtitle actionSubtitle'>
              Minimum paperwork
            </h3>
            <p className='cardDescr'>
              You can place an order for courier or 
              freight delivery without registration and contract.
            </p>
          </div>
          <div className='actions_cards__card'>
            <div className='iconBackground'>
              <img src={paymentIcon} alt='calc-icon'/>
            </div>
            <h3 className='cardSubtitle actionSubtitle'>
              Convenient payment
            </h3>
            <p className='cardDescr'>
              You can pay for delivery by card or in cash 
              at any of the order addresses. 
              For legal entities non-cash is available.
            </p>
          </div>
        </div>
        <button className='actions_btn'>Get started!</button>
        <img className='actions_cityImg' src={cityImg} alt='city-img'/>
      </section>
    )
}
export default Actions