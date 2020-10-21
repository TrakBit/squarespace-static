import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../../App.css'

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(FlexCol)`
  padding: 1rem;
  align-items: center;
  padding: 1rem;
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
        title={"Whatsapp Chat For Squarespace"}
        description={"Whatsapp Chat For Squarespace"}
      />
      <Container style={{ backgroundColor: "#f4f9f4" }}>
        <Banner windowWidth={windowWidth}/>
      </Container>
      <Container>
        <img
          style={{
            width: '90%',
            borderImageWidth: '2px',
            borderColor: '#00000',
            paddingTop: '70px'
          }}
          src={"https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fcover-min.png?alt=media&token=744d3e0d-7045-4fed-876e-09800b543d07"}
        />
      </Container>

      <Container style={{ margin: '0 auto', width: screenWidth }}>
        <div style={{ fontWeight: "600", fontSize: '35px', textAlign: 'center',  lineHeight: "1.3" }}>
          But why add a whatsApp chat ?
                </div>
        <div style={{ fontSize: '25px', marginTop: "20px", lineHeight: "1.3"}}>
          Modern online businesses run on<a style={highlight}><b>{' small town rules. '}</b></a>
          There needs to be a personal connection between you and the customer.
        </div>
      </Container>

      <Container style={{ margin: '0 auto', width: screenWidth }}>
        <div style={{fontWeight: "600",  fontSize: '35px', textAlign: 'center', marginTop: "20px",  lineHeight: "1.3"}}>
          Your customer have questions and they are looking for answers.
        </div>
        <p style={{ fontSize: '25px', marginTop: "20px", lineHeight: "1.3"}}>
          Customers wanna know
          <a style={highlight}><b>{' if there are more selections '}</b></a>
          and <a style={highlight}><b>{' when will it be shipped '}</b></a>, your presence is needed
        </p>
      </Container>

      <Container style={{ margin: '0 auto', width: screenWidth }}>
        <div style={{ fontSize: '45px', textAlign: 'center', lineHeight: "1.2", fontWeight: "600"}}>
          Why wait, when a 2 minute setup is all it takes
        </div>
        <br/>
        <a href={'https://app.salesjump.xyz/register'}><OutlineButton> JOIN</OutlineButton></a>
        <br/>
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
    </Layout>
  )
}

const Banner = ({windowWidth}) => {
  if (windowWidth > 480) {
    return (
      <>
        <div style={{ fontSize: '5vw', lineHeight: "1.5", fontWeight: "600" }}>
          📞 WhatsApp Chat on your
                  <br />Squarespace online store. 🛍️
              </div>
        <div style={{ fontSize: '2vw', lineHeight: "1.5", fontWeight: "600", marginTop: "20px" }}>
          Add the human touch to your store
              </div>
      </>
    );
  } else {
    return (
      <>
        <div style={{ fontSize: '9vw', textAlign: 'center',  lineHeight: "1.3" }}>
          📞 WhatsApp Chat on your
                  <br />Squarespace online store. 🛍️
              </div>
        <div style={{ fontSize: '4vw',  lineHeight: "1.3" }}>
          Add the human touch to your store
              </div>
      </>
    );
  }
}


export default IndexPage
