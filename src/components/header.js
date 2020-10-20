import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <>
    <div style={{height: 10, background: '#00b7c2'}}/>
    <header
      style={{
        background: `#f4f9f4`
      }}
    >

      <div className='rcards'>
        <div className='rcard'>
          <img 
            style={{
              height: "70px"
            }}
            src={"https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Flogo.png?alt=media&token=7fcdd79c-dfa6-4d24-9116-1f318520ed3d"}
          />
        </div>

        <div className='rcard'>
          <div className="flex-container">
            <button className="mybutton">Support</button>
            <button className="mybutton" onClick={() => window.location.href='https://salesjump.xyz/register'}>Join</button>
            <button className="mybutton"onClick={() => window.location.href='https://salesjump.xyz/login'}>Login</button>
          </div>
        </div>

      </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
