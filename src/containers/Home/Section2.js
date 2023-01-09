import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';

const Section2 = () => {
    return (
        <div className="cards_section section2">
            <div className="card">
                <div className="img_section">

                </div>
                <div className="details">
                    <h2>nft title</h2>
                    <p>Criteria criteria criteria criteria criteria criteria</p>
                </div>
            </div>
            <div className="card">
                <div className="img_section">

                </div>
                <div className="details">
                    <h2>nft title</h2>
                    <p>Criteria criteria criteria criteria criteria criteria</p>
                </div>
            </div>
        </div>
    );
};

Section2.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps)(Section2);
