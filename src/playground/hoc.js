//Higher order component - A component that renders another component
//reuse code
//render hiojacking

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <p>{props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>dsadsadas</p>}
            <WrappedComponent {...props} />
        </div>
    );
    
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated ? 
                <p>You aren't authenticated mother fucker</p> : 
                <WrappedComponent {...props}/>}
        </div>
    );
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="dsadas"/>, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="dsadas"/>, document.getElementById("app"));