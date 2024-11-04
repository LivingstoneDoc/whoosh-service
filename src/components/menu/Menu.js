import menuPinIcon from '../../assets/icons/menu/menu-pin.svg';
import './menu.scss';

function Menu(props) {
    return (
        <section className='menuWrapper'>
                <div className={`menuWrapper_menu ${props.isOpen ? 'openMenu' : ''}`}>
                    <div className='menuWrapper_menu__header'>
                        <button className='menuLocationBtn'><img src={menuPinIcon} alt='pin-icon'/>NY, Manhattan</button>
                        <div className='menuCloseBtn' onClick={props.onClose}></div>
                    </div>
                    <form className='menuWrapper_menu__form'>
                        <input className='menuInput' type='text' placeholder='Track a package'/>
                        <button className='menuInputBtn'>
                            <svg className='menuIcon' width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.0909 10.5455C17.0909 11.9818 16.6283 13.31 15.8439 14.3894L20 
                                18.5455L18.5455 20L14.3894 15.8439C13.31 16.6283 11.9818 17.0909 10.5455 17.0909C6.9305 17.0909 4 14.1604 4 
                                10.5455C4 6.9305 6.9305 4 10.5455 4C14.1604 4 17.0909 6.9305 17.0909 10.5455ZM10.5 15C13 15 15 13.0909 15 
                                10.5455C15 8 13 6 10.5455 6C8.09091 6 6 8 6 10.5455C6 13.0909 8 15 10.5 15Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </form>
                    <ul className='menuWrapper_menu__list'>
                        <li className='menuListItem'>Send a Parcel</li>
                        <li className='menuListItem'>Become a Courier</li>
                        <li className='menuListItem'>Affiliate Program</li>
                        <li className='menuListItem'>Help & Support</li>
                    </ul>
                    <button className='menuWrapper_menu__complexOrderBtn'>Take a complex order</button>
                </div>
                <div className={`menuWrapper_overlay ${props.isOpen ? 'openMenu' : ''}`}></div>
        </section>
    )
}
export default Menu;