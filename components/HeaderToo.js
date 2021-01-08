import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
    <header>
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0.45rem 1.0875rem`,
            }}
        >
            <h1
                style={{ margin: 0, fontSize: 1.75 + `rem` }}
                className="has-text-weight-bold"
            >
                <Link
                    href="/"
                    style={{
                        color: `yellow`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
