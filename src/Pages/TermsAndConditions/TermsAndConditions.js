import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h4>terms and conditions coming soon</h4>
            <p>If you agree please <Link to='/signup'>Sign Up</Link></p>
        </div>
    );
};

export default TermsAndConditions;