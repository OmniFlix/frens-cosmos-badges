import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import variables from '../../utils/variables';
import { ReactComponent as Logo } from '../../assets/nav_logo.svg';
import { ReactComponent as Twitter } from '../../assets/social/twitter.svg';
import { ReactComponent as Discord } from '../../assets/social/discord.svg';
import { ReactComponent as Instagram } from '../../assets/social/insta.svg';

const Footer = (props) => {
    return (
        <div className="footer">
            <Logo />
            <div className="social_icons">
                <Twitter />
                <Discord />
                <Instagram />
            </div>
            <div className="copy_right">
                {variables[props.lang].copy_right_content}
            </div>
        </div>
    );
};

Footer.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps)(Footer);
