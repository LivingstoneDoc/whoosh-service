import paymentImg1 from '../../assets/img/payment-section/amex.png';
import paymentImg2 from '../../assets/img/payment-section/g-pay.png';
import paymentImg3 from '../../assets/img/payment-section/mastercard.png';
import paymentImg4 from '../../assets/img/payment-section/sofort.png';
import paymentImg5 from '../../assets/img/payment-section/union-pay.png';
import paymentImg6 from '../../assets/img/payment-section/visa.png';
import arrowLeftIcon from '../../assets/icons/payment-section/left.svg';
import arrowRightIcon from '../../assets/icons/payment-section/right.svg';
import boxIcon from '../../assets/icons/divider/divider-box.svg';
import './payment.scss';

function Payment() {
    return (
        <section className="payment">
            <h2 className="subtitle">Payment methods</h2>
            <div className="payment_slider">
                <button className='arrowBtn arrowLeft'><img src={arrowLeftIcon} alt='arrow-left-icon'/></button>
                <img src={paymentImg2} alt='pay-method1'/>
                <img src={paymentImg4} alt='pay-method1'/>
                <img src={paymentImg5} alt='pay-method1'/>
                <img src={paymentImg6} alt='pay-method1'/>
                <img src={paymentImg3} alt='pay-method1'/>
                <img src={paymentImg1} alt='pay-method1'/>
                <button className='arrowBtn arrowRight'><img src={arrowRightIcon} alt='arrow-right-icon'/></button>
            </div>
            <img className='dividerIcon' src={boxIcon} alt='box-icon'/>
        </section>
    )
}
export default Payment;