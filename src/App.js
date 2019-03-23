import React from 'react';

import './App.scss';

const App = ({children}) => {
    return (
        <div className="patient-master-app-wrap">
            {children}
        </div>
    );
};

export default App;
