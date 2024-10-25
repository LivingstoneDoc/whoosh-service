import routeIcon from '../../assets/icons/footer/route-footer.svg';
import pinFooterIcon from '../../assets/icons/footer/pin-footer.svg';
import fbIcon from '../../assets/icons/footer/facebook.svg';
import vkIcon from '../../assets/icons/footer/vk.svg';
import youtubeIcon from '../../assets/icons/footer/youtube.svg';
import instagramIcon from '../../assets/icons/footer/instagram.svg';
import companyImg from '../../assets//img/footer/logo-footer.png';
import policyIcon from '../../assets/icons/footer/policy.svg';
import './footer.scss';

function Footer() {
  return (
    <section className="footer">
      <div className='footer_upperPart'>
        <div className='footer_upperPart__about'>
          <div className='footerSubtitle'>About Whoosh</div>
          <img className='aboutIcon' src={routeIcon} alt='route-icon'/>
          <p className='aboutDescr'>
            Express delivery of documents and parcels for 
            organizations, express delivery of correspondence, 
            purchases and other goods
          </p>
        </div>
        <div className='footer_upperPart__listWrapper'>
          <div className='footerSubtitle'>Menu</div>
          <div className='footerDivider'></div>
          <ul className='footerList'>
            <li className='footerListItem'><a className='footerLink' href='#'>About company</a></li>
            <li className='footerListItem'><a className='footerLink' href='#'>Contact</a></li>
            <li className='footerListItem'><a className='footerLink' href='#'>Rules</a></li>
            <li className='footerListItem'><a className='footerLink' href='#'>FAQ</a></li>
            <li className='footerListItem'><a className='footerLink' href='#'>Reviews</a></li>
            <li className='footerListItem'><a className='footerLink' href='#'>Cargo transportation</a></li>
            <li className='footerListItem'><a className='footerLink' href='#'>Tariffs</a></li>
          </ul>
        </div>
        <div className='footer_upperPart__listWrapper'>
        <div className='footerSubtitle'>Services</div>
        <div className='footerDivider'></div>
          <ul className='footerList'>
            <li className='footerListItem'><a className='footerLink' href='#'>Online stores</a></li>
            <li className='footerListItem'><a className='footerLink' href='#'>Legal entity</a></li>
            <li className='footerListItem'><a className='footerLink' href='#'>API Integration</a></li>
            <li className='footerListItem'><a className='footerLink' href='#'>Contract</a></li>
            <li className='footerListItem'><a className='footerLink' href='#'>Jobs</a></li>
            <li className='footerListItem'><a className='footerLink' href='#'>Courier job</a></li>
            <li className='footerListItem'><a className='footerLink' href='#'>The blog</a></li>
          </ul>
        </div>
        <div className='footer_upperPart__contact'>
          <div className='footerSubtitle'>Contact us</div>
          <div className='footerDivider'></div>
          <a className='footerMobileLink' href='tel:+12129345959'>8 800 934 5959</a>
          <div className='addressWrapper'>
            <img className='addressIcon' src={pinFooterIcon} alt='pin-icon'/>
            <a className='address' href='#'>2545 W. Diversey Ave.
              <br/><br/><span>3rd Floor Chicago, IL 60647</span></a>
          </div>
          <div className='footerSocialLinks'>
            <div className='linkBackground'><img src={fbIcon} alt='fb-icon'/></div>
            <div className='linkBackground'><img src={vkIcon} alt='vk-icon'/></div>
            <div className='linkBackground'><img src={youtubeIcon} alt='youtube-icon'/></div>
            <div className='linkBackground'><img src={instagramIcon} alt='instagram-icon'/></div>
          </div>
        </div>
      </div>
      <div className='footer_lowerPart'>
        <div className='footer_lowerPart__madeTitle'>Made by</div>
        <div className='footer_lowerPart__rights'>
          <div className='rightsText'>© 2022. All rights reserved.</div>
          <img className='rightsImg' src={companyImg} alt='company-img'/>
          <div className='policy'>
            <img className='policyIcon' src={policyIcon} alt='policy-icon'/>
            <div className='policyText'>Privacy policy</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer;