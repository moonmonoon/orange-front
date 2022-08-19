import React, { Component } from "react";
import { Link } from 'react-router-dom';

function Register(props) {
    return (
		<>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>O'Range</h1>
            </Link>
		</>
    );
}

export default Register;