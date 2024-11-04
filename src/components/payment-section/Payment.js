import Slider from 'react-slick';
import paymentImg1 from '../../assets/img/payment-section/amex.png';
import paymentImg2 from '../../assets/img/payment-section/g-pay.png';
import paymentImg3 from '../../assets/img/payment-section/mastercard.png';
import paymentImg4 from '../../assets/img/payment-section/sofort.png';
import paymentImg5 from '../../assets/img/payment-section/union-pay.png';
import paymentImg6 from '../../assets/img/payment-section/visa.png';
import prevArrowIcon from '../../assets/icons/payment-section/prevArrow.svg';
import nextArrowIcon from '../../assets/icons/payment-section/nextArrow.svg';
import boxIcon from '../../assets/icons/divider/divider-box.svg';
import './payment.scss';

function PrevArrow(props) {
    let { onClick } = props;
    return (
        <div className='arrowBtn' onClick={onClick}><img src={prevArrowIcon} alt='prev-arrow-icon'/></div>
    )
}

function NextArrow(props) {
    let { onClick } = props;
    return (
        <div className='arrowBtn' onClick={onClick}><img src={nextArrowIcon} alt='next-arrow-icon'/></div>
    )
}

function PaymentSlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    centerMode: true,
                    centerPadding: '30px',
                    arrows: false
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '20px',
                    arrows: false
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10px',
                    arrows: true
                },
            },
        ],
    };
    return (
        <Slider {...settings} className='payment_slider'>
            <div className='payment_slider__slide'><img src={paymentImg2} alt='pay-method1'/></div>
            <div className='payment_slider__slide'><img src={paymentImg4} alt='pay-method1'/></div>
            <div className='payment_slider__slide'><img src={paymentImg5} alt='pay-method1'/></div>
            <div className='payment_slider__slide'><img src={paymentImg6} alt='pay-method1'/></div>
            <div className='payment_slider__slide'><img src={paymentImg3} alt='pay-method1'/></div>
            <div className='payment_slider__slide'><img src={paymentImg1} alt='pay-method1'/></div>
        </Slider>
    )
}

function Payment() {
    return (
        <section className='payment'>
            <h2 className='subtitle'>Payment methods</h2>
            <PaymentSlider />
            <img className='dividerIcon' src={boxIcon} alt='box-icon'/>
        </section>
    )
}
export default Payment;