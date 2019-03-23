import React from 'react';
import {Link} from 'react-router-dom';

const App404Component = () => {
    return (
        <div className="app-error-page-view-component">
            <h1>404 Nothing To See Here</h1>
            <Link to="/">leave this page</Link>
        </div>
    );
};

export default App404Component;
