import React, { useEffect, useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../../App.css'
require('typeface-rubik')

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(FlexCol)`
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
`;


const OutlineButton = styled.button`
  height: 42px;
  width: 100px;
  background-color: #FFFFFF;
  color: #00b7c2;
  border-color: #00b7c2;
  border-width: 4px;
  font-weight: 600;
  font-size: 14px;
  border-radius: 0.25rem;
  line-height: 1.5;
  -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const highlight = {
  background: '#b4f2e1',
  color: '#000000'
};

const heading = {
  fontSize: '20px',
  color: '#525f7f'
};

const price = {
  fontSize: '100px',
  paddingBottom: '35px'
}

const IndexPage = () => {

  const [screenWidth, setScreenWidth] = useState('50%');
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    if (window.innerWidth < 480) {
      setScreenWidth('100%');
    }
  }, []);

  return (
    <Layout >
      <SEO
        name={"Whatsapp Chat For Squarespace"}
        title={"SalesJump | Whatsapp Chat For Squarespace"}
        description={"Whatsapp Chat For Squarespace"}
        keywords={[`Squarespace`, `Whatsapp`]}
        url={'https://salesjump.xyz'}
      />
      <Container style={{ backgroundColor: "#f4f9f4" }}>
        <Banner windowWidth={windowWidth} />
      </Container>
      <Container>
        <img
          style={{
            width: '90%',
            borderImageWidth: '2px',
            borderColor: '#00000',
            paddingTop: '70px'
          }}
          alt="squarespace whatsapp"
          src={"https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp.webp?alt=media&token=85316663-0cd5-48a2-b946-4732162fad79"}
        />
      </Container>

      <Container style={{ margin: '0 auto', width: screenWidth }}>
        <h1 style={{ fontWeight: "600", fontSize: '35px', textAlign: 'center', lineHeight: "1.3" }}>
          But why add a whatsApp chat ?
        </h1>
        <div style={{ fontSize: '25px', marginTop: "20px", lineHeight: "1.3" }}>
          Modern online businesses run on<a style={highlight}><b>{' small town rules. '}</b></a>
          There needs to be a personal connection between you and the customer.
        </div>
      </Container>

      <Container style={{ margin: '0 auto', width: screenWidth }}>
        <h1 style={{ fontWeight: "600", fontSize: '35px', textAlign: 'center', marginTop: "20px", lineHeight: "1.3" }}>
          Your customer have questions and they are looking for answers.
        </h1>
        <p style={{ fontSize: '25px', marginTop: "20px", lineHeight: "1.3" }}>
          Customers wanna know
          <a style={highlight}><b>{' if there are more selections '}</b></a>
          and <a style={highlight}><b>{' when will it be shipped '}</b></a>, your presence is needed
        </p>
      </Container>

      <Container style={{ margin: '0 auto', width: screenWidth }}>
        <h1 style={{ fontSize: '45px', textAlign: 'center', lineHeight: "1.2", fontWeight: "600" }}>
          Why wait, when a 2 minute setup is all it takes
        </h1>
        <br />
        <a href={'https://app.salesjump.xyz/register'}><OutlineButton> JOIN</OutlineButton></a>
        <br />
      </Container>

      <div style={{ textAlign: 'center', backgroundColor: '#f4f9f4', borderRadius: '30px', width: '90%', marginLeft: '5%' }}>
        <br />
        <h1 style={heading}>{'Monthly Subscription'}</h1>
        <div style={{ marginTop: '1%', marginBottom: '5%' }}>
          <h1 style={price}>
            $9
          </h1>
        </div>
      </div>


      <div>
        <h1 style={{ fontWeight: "600", fontSize: '35px', textAlign: 'center', lineHeight: "1.3" }}>
          Here's our quick to follow guide for setup
        </h1>
        <Container style={{ textAlign: 'center'}}>
          <a
            style={{ textDecoration: 'none', color: '#000000', minWidth: '140px', maxWidth: '500px'}}
            href={"https://salesjump.xyz/blog/add-whatsapp-live-chat-squarespace"}
          >
            <div className="card">
              <img
                src={"https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-design-widget.webp?alt=media&token=7cb516c8-8f0a-4460-868f-6438182671f6"}
                alt="Avatar"
                style={{ width: '100%' }}
              />
              <Container>
                <h4>
                  <b>
                  A guide on how to integrate whatsapp chat to squarespace for live support
                    </b>
                </h4>
              </Container>
            </div>
          </a>
        </Container>
      </div>


      
      <div>
        <br/>
      <h1 style={{ fontWeight: "600", fontSize: '35px', textAlign: 'center', lineHeight: "1.3" }}>
          Read more on why you need WhatsApp support for Squarespace
        </h1>     
      <div className="rcards">
        <div className="rcard">

          <Container>
            <a
              style={{ textDecoration: 'none', color: '#000000' }}
              href={"https://salesjump.xyz/blog/whatsapp-chat-squarespace"}
            >
              <div className="card">
                <img
                  src={"https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp.webp?alt=media&token=85316663-0cd5-48a2-b946-4732162fad79"}
                  alt="Avatar"
                  style={{ width: '100%' }}
                />
                <Container>
                  <h4>
                    <b>
                      WhatsApp Chat For Squarespace
                    </b>
                  </h4>
                </Container>
              </div>
            </a>
          </Container>
        </div>

        <div className="rcard">
          <Container>
            <a
              style={{ textDecoration: 'none', color: '#000000' }}
              href={"https://salesjump.xyz/blog/squarespace-help-chat-live"}
            >
              <div className="card">
                <img
                  src={"https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-widget.webp?alt=media&token=e536f4b6-1ecc-4ef7-bd26-39bc08af2186"}
                  alt="Avatar"
                  style={{ width: '100%' }}
                />
                <Container>
                  <h4>
                    <b>
                      Squarespace store owners help your customers by live chat support
                    </b>
                  </h4>
                </Container>
              </div>
            </a>
          </Container>
        </div>
      </div>
      </div>

    </Layout>
  )
}

const Banner = ({ windowWidth }) => {
  if (windowWidth > 480) {
    return (
      <>
        <h1 style={{ fontSize: '5vw', lineHeight: "1.5", fontWeight: "600" }}>
          📞 WhatsApp Chat on your
                  <br />Squarespace online store. 🛍️
        </h1>
        <h1 style={{ fontSize: '2vw', lineHeight: "1.5", fontWeight: "600", marginTop: "20px" }}>
          Add the human touch to your store
        </h1>
      </>
    );
  } else {
    return (
      <>
        <h1 style={{ fontSize: '9vw', textAlign: 'center', lineHeight: "1.3" }}>
          📞 WhatsApp Chat on your
                  <br />Squarespace online store. 🛍️
        </h1>
        <h1 style={{ fontSize: '4vw', lineHeight: "1.3" }}>
          Add the human touch to your store
        </h1>
      </>
    );
  }
}

const Guide = ({ windowWidth }) => {
  if (windowWidth > 480) {
    return (
      <>
        <h1 style={{ fontSize: '5vw', lineHeight: "1.5", fontWeight: "600" }}>
          📞 WhatsApp Chat on your
                  <br />Squarespace online store. 🛍️
        </h1>
        <h1 style={{ fontSize: '2vw', lineHeight: "1.5", fontWeight: "600", marginTop: "20px" }}>
          Add the human touch to your store
        </h1>
      </>
    );
  } else {
    return (
      <>
        <h1 style={{ fontSize: '9vw', textAlign: 'center', lineHeight: "1.3" }}>
          📞 WhatsApp Chat on your
                  <br />Squarespace online store. 🛍️
        </h1>
        <h1 style={{ fontSize: '4vw', lineHeight: "1.3" }}>
          Add the human touch to your store
        </h1>
      </>
    );
  }
}


export default IndexPage
