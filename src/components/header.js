import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = () => (
    <>
        <div style={{height: 10, background: '#00b7c2'}}/>
        <header
            style={{
                background: '#f4f9f4'
            }}
        >

            <div className='rcards'>
                <div className='rcard'>
                    <Link
                        to={'/'}
                        style={{textDecoration: 'none'}}
                    >
                        <SvgComponent style={{height: '90px'}}/>
                    </Link>
                </div>

                <div className='rcard'>
                    <div className='flex-container'>
                        <button
                            className='mybutton'
                            onClick={() => window.location.href = 'mailto:harsh.vardhan.611@gmail.com'}
                        >Support</button>
                        <button
                            className='mybutton'
                            onClick={() => window.location.href = 'https://app.salesjump.xyz/register'}
                        >Join</button>
                        <button
                            className='mybutton'
                            onClick={() => window.location.href = 'https://app.salesjump.xyz/login'}
                        >Login</button>
                    </div>
                </div>

            </div>
        </header>
    </>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ''
};

function SvgComponent(props) {
    return (
        <svg
            viewBox='0 0 300 120'
            fillRule='evenodd'
            clipRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit={2}
            {...props}
        >
            <text
                x={87.301}
                y={56.681}
                fontFamily="'Rubik-Bold','Rubik'"
                fontWeight={700}
                fontSize={36}
                transform='translate(-25.792 19.418) scale(1.09274)'
            >
                {'SalesJump'}
            </text>
            <g fillRule='nonzero'>
                <path d='M27.703 23.327c-.046.042-.09.087-.131.132L6.097 44.732a2.622 2.622 0 00-.561 2.738 2.736 2.736 0 002.171 1.703l10.26-.034.086 26.332a2.166 2.166 0 002.287 2.158l18.238-.06a2.166 2.166 0 002.273-2.173l-.086-26.332 10.259-.033a2.736 2.736 0 002.16-1.717l-.003-1.026a2.508 2.508 0 00-.69-1.708L30.763 23.45a2.166 2.166 0 00-3.06-.122zm17.72 21.162l-6.953.023c-1.254.004-2.279.464-2.275 1.718l.088 26.787-13.679.045-.088-26.788c-.004-1.254-1.031-1.706-2.285-1.702l-6.953.023 16.02-15.784L45.424 44.49zM18.074 82.196a2.28 2.28 0 002.288 2.273l18.238-.06a2.28 2.28 0 10-.015-4.56l-18.238.06a2.28 2.28 0 00-2.273 2.287zM18.097 89.036a2.28 2.28 0 002.287 2.272l18.239-.06a2.28 2.28 0 10-.015-4.56l-18.239.06a2.28 2.28 0 00-2.272 2.288zM18.12 95.875a2.28 2.28 0 002.287 2.273l18.238-.06a2.28 2.28 0 10-.015-4.56l-18.238.06a2.28 2.28 0 00-2.273 2.287z'/>
            </g>
        </svg>
    );
}

export default Header;
