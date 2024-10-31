import Slider from 'react-slick';
import partnersCaseIcon from '../../assets/icons/partners-section/case.svg';
import partnerBwImg1 from '../../assets/img/partners-section/alva-bw.png';
import partnerBwImg2 from '../../assets/img/partners-section/fagor-bw.png';
import partnerBwImg3 from '../../assets/img/partners-section/guitar-center-bw.png';
import partnerBwImg4 from '../../assets/img/partners-section/radioshack-bw.png';
import partnerBwImg5 from '../../assets/img/partners-section/tendo-bw.png';
import partnerColoredImg1 from '../../assets/img/partners-section/alva-colored.png';
import partnerColoredImg2 from '../../assets/img/partners-section/fagor-colored.png';
import partnerColoredImg3 from '../../assets/img/partners-section/guitar-center-colored.png';
import partnerColoredImg4 from '../../assets/img/partners-section/radioshack-colored.png';
import partnerColoredImg5 from '../../assets/img/partners-section/tendo-colored.png';
import './partners.scss';

function PartnersSlider() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true
  };
  return (
    <Slider {...settings} className='partners_slider'>
        <div className='partners_slider__slide'>
          <img className='bwImg' src={partnerBwImg1} alt='partner-bw1-icon'/>
          <img className='coloredImg' src={partnerColoredImg1} alt='partner-colored1-icon'/>
        </div>
        <div className='partners_slider__slide'>
          <img className='bwImg' src={partnerBwImg5} alt='partner-bw2-icon'/>
          <img className='coloredImg' src={partnerColoredImg5} alt='partner-colored2-icon'/>
        </div>
        <div className='partners_slider__slide'>
          <img className='bwImg' src={partnerBwImg2} alt='partner-bw3-icon'/>
          <img className='coloredImg' src={partnerColoredImg2} alt='partner-colored3-icon'/>
        </div>
        <div className='partners_slider__slide'>
          <img className='bwImg' src={partnerBwImg4} alt='partner-bw4-icon'/>
          <img className='coloredImg' src={partnerColoredImg4} alt='partner-colored4-icon'/>
        </div>
        <div className='partners_slider__slide'>
          <img className='bwImg' src={partnerBwImg3} alt='partner-bw5-icon'/>
          <img className='coloredImg' src={partnerColoredImg3} alt='partner-colored5-icon'/>
        </div>
    </Slider>
  )
}

function Partners() {
    return (
    <section className='partners'>
      <div className='partners_subtitleAndIconWrapper'>
      <h2 className='partners_title subtitle'>Our Partners</h2>
      <button className='partners_subtitleAndIconWrapper__btn'><img src={partnersCaseIcon} alt='case-icon'/><span>Let's collaborate</span></button>
      </div>
      <PartnersSlider />
      {/* <div className='partners_slider'>
        <div className='partners_slider__imgWrapper'>
          <img className='bwImg' src={partnerBwImg1} alt='partner-bw1-icon'/>
          <img className='coloredImg' src={partnerColoredImg1} alt='partner-colored1-icon'/>
        </div>
        <div className='partners_slider__imgWrapper'>
          <img className='bwImg' src={partnerBwImg5} alt='partner-bw2-icon'/>
          <img className='coloredImg' src={partnerColoredImg5} alt='partner-colored2-icon'/>
        </div>
        <div className='partners_slider__imgWrapper'>
          <img className='bwImg' src={partnerBwImg2} alt='partner-bw3-icon'/>
          <img className='coloredImg' src={partnerColoredImg2} alt='partner-color3-icon'/>
        </div>
        <div className='partners_slider__imgWrapper'>
          <img className='bwImg' src={partnerBwImg4} alt='partner-bw4-icon'/>
          <img className='coloredImg' src={partnerColoredImg4} alt='partner-color4-icon'/>
        </div>
        <div className='partners_slider__imgWrapper'>
          <img className='bwImg' src={partnerBwImg3} alt='partner-bw5-icon'/>
          <img className='coloredImg' src={partnerColoredImg3} alt='partner-color5-icon'/>
        </div>
      </div> */}
    </section>
    )
}
export default Partners;