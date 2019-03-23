import React, {Component} from 'react';
import AppCenterBrandComponent from '../../Components/AppCenterBrandComponent/AppCenterBrandComponent';
import {Link} from "react-router-dom";
// import appXHRService from '../../services/appXHRService';

class SignupContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
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

    onSubmitForm = e => {
        e.preventDefault();

        // const dataObject = {
        //     endpoint: `user/signup`,
        //     email: this.state.email,
        //     username: this.state.username,
        //     password: this.state.password
        // };

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

        window.location = '/';
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
                        <label className="app-form-label">EMAIL</label>
                        <input
                            type="email"
                            className="form-control app-form-input"
                            value={this.state.email}
                            onChange={event => this.setState({ email: event.target.value })}
                        />
                    </div>
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
                            value="SIGN UP"
                            className="form-control btn btn-primary app-form-submit bg-color-dark-salmon"/>
                    </div>
                </form>
                <div className="app-regular-text-wrapper">
                    <Link to="/" className="app-regular-text color-dark-salmon">
                        LOG IN
                    </Link>
                </div>
            </div>
        );
    }
}

export default SignupContainer;
