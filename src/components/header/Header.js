import logo from '../../assets/icons/header/logo.svg';
import pin from '../../assets/icons/header/pin.svg';
import lock from '../../assets/icons/header/lock.svg';
import profile from '../../assets/icons/header/profile.svg';
import './header.scss';

function Header(props) {
    return (
        <header className='headerWrapper'>
        <div className='header'>
          <div className='header_leftSide'>
            <div className='header_leftSide__logo'><img src={logo} alt='logo'/></div>
              <button className='header_leftSide__locationBtn headerBtn'><img src={pin} alt='pin-icon'/>NY, Manhattan</button>
          </div>
          <div className='header_inputWrapper'>
          <input className='header_inputWrapper__input' type='text' placeholder='Track a Package'/>
          <button className='header_inputWrapper__btn'>
            <svg className='inputBtnIcon' width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 
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
        </div>
        <div className='headerSmallScreen'>
          <div className='profileIconWrapper'><img className='profileIcon' src={profile} alt='profile-icon'/></div>
          <div className='logoIconWrapper'><img className='logoIcon' src={logo} alt='logo'/></div>
          <div className='menuIcon' onClick={props.onClickMenu}>
            <span className='menuIcon_firstLine menuLine'></span>
            <span className='menuIcon_secondLine menuLine'></span>
            <span className='menuIcon_thirdLine menuLine'></span>
          </div>
        </div>
      </header>
    )
}
export default Header;