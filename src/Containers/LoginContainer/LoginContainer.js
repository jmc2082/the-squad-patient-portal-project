import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import appXHRService from '../../services/appXHRService';

import AppCenterBrandComponent from '../../Components/AppCenterBrandComponent/AppCenterBrandComponent';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.onCheckStateAndProps = this.onCheckStateAndProps.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onCheckStateAndProps = () => {
        console.log(this.state);
        console.log(this.props);
    };

    // onGetStarWarsData = () => {
    //     const dataObject = {
    //         url: `https://swapi.co/api/people/1`
    //     };
    //
    //     appXHRService.onGETData(dataObject)
    //         .then(response => {
    //             console.log(response);
    //             return response;
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             return err;
    //         });
    // };

    onSubmitForm = e => {
        e.preventDefault();

        // const dataObject = {
        //     endpoint: `user/authenticate`,
        //     username: this.state.username,
        //     password: this.state.password
        // };
        //
        // appXHRService.onPOSTData(dataObject)
        //     .then(response => {
        //         console.log(response);
        //         return response;
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         return err;
        //     });

        localStorage.setItem('patient_user_token', '989898908');

        window.location.reload(true);
    };

    componentDidMount() {
        // this.onCheckStateAndProps();
    }

    componentDidUpdate() {
        // this.onCheckStateAndProps();
    }

    render() {
        return (
            <div className="app-container-wrapper">
                <AppCenterBrandComponent />
                <form
                    onSubmit={this.onSubmitForm}
                    className="form-group app-form-group">
                    <div className="app-form-div">
                        <label className="app-form-label">USERNAME</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.username}
                            onChange={event => this.setState({ username: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">PASSWORD</label>
                        <input
                            type="password"
                            className="form-control app-form-input"
                            value={this.state.password}
                            onChange={event => this.setState({ password: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <input
                            type="submit"
                            value="LOG IN"
                            className="form-control btn btn-primary app-form-submit bg-color-dark-salmon"/>
                    </div>
                </form>
                <div className="app-regular-text-wrapper">
                    <Link to="/signup" className="app-regular-text color-dark-salmon">
                        CREATE AN ACCOUNT
                    </Link>
                </div>
            </div>
        );
    }
}

export default LoginContainer;
