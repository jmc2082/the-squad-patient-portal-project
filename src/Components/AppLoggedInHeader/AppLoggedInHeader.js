import React from 'react';

import './AppLoggedInHeader.scss';

import AppNav from '../AppNav/AppNav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons';

const onOpenNavModal = () => {
    const navModal = document.querySelector('#app-nav-modal');
    navModal.classList.add('show-element');
};

const AppLoggedInHeader = props => {
    // console.log(props);

    return (
        <React.Fragment>
            <AppNav />
            <header className="app-logged-in-header">
                <h2 className="app-header-title">
                    {props.header_title}
                </h2>
                <div
                    onClick={() => onOpenNavModal()}
                    className="app-header-nav-toggle-wrapper">
                    <FontAwesomeIcon icon={faEllipsisV} />
                </div>
            </header>
        </React.Fragment>
    );
};

export default AppLoggedInHeader;
