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
          <Link to={"/"}>
            <img 
              style={{
                height: "70px"
              }}
              alt="squarespace whatsapp"
              src={"https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Flogo.webp?alt=media&token=a94c78cb-ceea-4900-b3d7-d7fbef920d75"}
            />
          </Link>
        </div>

        <div className='rcard'>
          <div className="flex-container">
            <button className="mybutton" onClick={() => window.location.href='mailto:harsh.vardhan.611@gmail.com'}>Support</button>
            <button className="mybutton" onClick={() => window.location.href='https://app.salesjump.xyz/register'}>Join</button>
            <button className="mybutton"onClick={() => window.location.href='https://app.salesjump.xyz/login'}>Login</button>
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
