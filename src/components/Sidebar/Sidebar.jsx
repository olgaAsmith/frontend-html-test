import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }) );
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    render() {
        const { isOpened } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });

        return (
            <div className={` ${containerClassnames} ${isOpened ? '' : 'sidebar_short'}` }>
                <div className='panel'>
                    <img
                    className={` logo ${isOpened ? '' : 'logo_short'} `}
                        src={ logo }
                        alt="TensorFlow logo"
                    />
                    <span className={`company ${isOpened ? '' : 'invisible'} `}>TensorFlow</span>
                    <button className={` button ${isOpened ? 'button_left' : 'button_right'} `} onClick={ this.toggleSidebar }>
                        <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' } />
                    </button>
                </div>

                <div className={` menu ${isOpened ? '' : 'menu_short'} `}>
                    {
                        routes.map((route) => (
                            <div className='menu-item' key={ route.title } onClick={ () => this.goToRoute(route.path) }>
                                <FontAwesomeIcon className='icon' icon={ route.icon } />
                                <span className={` item ${isOpened ? '' : 'invisible'} `}>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>

                <div className={` menu menu-help ${isOpened ? '' : 'menu_short'} `}>
                    {
                        bottomRoutes.map((route) => (
                            <div className='menu-item' key={ route.title } onClick={ () => this.goToRoute(route.path) }>
                                <FontAwesomeIcon className='icon' icon={ route.icon } />
                                <span className={` item ${isOpened ? '' : 'invisible'} `}>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
