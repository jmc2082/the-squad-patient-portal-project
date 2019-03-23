import React from 'react';

import './AppCenterBrandContainer.scss';

// const appBrandImage = `https://www.fillmurray.com/g/410/410`;
// const appBrandImage = `../../../../assets/images/bill-murray-1.jpg`;
// const appBrandImageTitle = `Patient Portal Brand Image.`;

const AppCenterBrandComponent = () => {
    return (
        <header className="app-center-brand-component">
            {/*<img*/}
                {/*src={appBrandImage}*/}
                {/*alt={appBrandImageTitle}*/}
                {/*className="app-brand-center-img"/>*/}
            <div className="app-brand-bg-image-block">-</div>
            <span className="app-brand-center-title">
                PATIENT PORTAL
            </span>
        </header>
    );
};

export default AppCenterBrandComponent;
