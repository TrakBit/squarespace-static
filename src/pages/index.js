import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import {LiteYouTubeEmbed} from 'react-lite-youtube-embed';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../../App.css';
require('typeface-rubik');

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
};

const IndexPage = () => {
    const [screenWidth, setScreenWidth] = useState('50%');
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth < 480) {
            setScreenWidth('100%');
        }
    }, []);

    return (
        <Layout >
            <SEO
                title={'SalesJump - Add WhatsApp Chat To Squarespace'}
                description={'Integrate WhatsApp Live Chat Widget In Squarespace For Customer Support & Help'}
                keywords={[
                    'How To Add WhatsApp Chat To Squarespace',
                    'Add WhatsApp Chat To Squarespace',
                    'Add WhatsApp To Squarespace',
                    'Whatsapp Chat Button Squarespace',
                    'Squarespace WhatsApp Integration',
                    'Squarespace Chat Plugin'
                ]}
                url={'https://salesjump.xyz'}
            />
            <Container style={{backgroundColor: '#f4f9f4'}}>
                <Banner windowWidth={windowWidth}/>
            </Container>

            <div style={{textAlign: 'center'}}>
                <Container>
                    <picture>
                        <source
                            style={{
                                width: '90%',
                                borderImageWidth: '2px',
                                borderColor: '#00000',
                                paddingTop: '70px'
                            }}
                            type='image/avif'
                            srcSet={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp.avif?alt=media&token=a6709bad-b934-4771-9f70-973ae9b6ff90'}
                        />
                        <img
                            style={{
                                width: '90%',
                                borderImageWidth: '2px',
                                borderColor: '#00000',
                                paddingTop: '70px'
                            }}
                            alt='squarespace whatsapp'
                            src={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp.jpg?alt=media&token=51001b99-5a72-415a-8d3b-a72db98fc0d8'}
                        />
                    </picture>
                </Container>
            </div>

            <Container style={{margin: '0 auto', width: screenWidth}}>
                <div style={{fontWeight: '600', fontSize: '35px', textAlign: 'center', lineHeight: '1.3'}}>
                    What is SalesJump For?
                </div>
                <h2 style={{fontSize: '25px', marginTop: '20px', lineHeight: '1.3', textAlign: 'center'}}>
                    To integrate <a style={highlight}><b>WhatsApp live chat widget in Squarespace</b></a> for better customer service and support
                </h2>
            </Container>

            <Container style={{margin: '0 auto', width: screenWidth}}>
                <div style={{fontSize: '45px', textAlign: 'center', lineHeight: '1.2', fontWeight: '600'}}>
                    Why wait, when a 2 minute setup is all it takes
                </div>
                <br/>
                <Link to={'https://app.salesjump.xyz/register'}>
                    <OutlineButton>
                        JOIN
                    </OutlineButton>
                </Link>
                <br/>
            </Container>

            <div style={{textAlign: 'center', backgroundColor: '#f4f9f4', borderRadius: '30px', width: '90%', marginLeft: '5%'}}>
                <br/>
                <div style={heading}>{'Monthly Subscription'}</div>
                <div style={{marginTop: '30px', marginBottom: '5%'}}>
                    <br/>
                    <div style={price}>
                        $9
                    </div>
                    <br/>
                </div>
            </div>

            <div style={{fontWeight: '600', fontSize: '35px', textAlign: 'center', lineHeight: '1.3', marginBottom: '30px'}}>
                Step by step guide for setup
            </div>

            <div className='rcards'>
                <div className='rcard'>
                    <Container>
                        <Link
                            style={{textDecoration: 'none', color: '#000000', minWidth: '140px', maxWidth: '500px'}}
                            to={'/blog/add-whatsapp-live-chat-squarespace'}
                        >
                            <div className='card'>
                                <picture>
                                    <source
                                        srcSet={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-design-widget.avif?alt=media&token=d0d3dc05-d362-4420-a9cf-8f15774034c4'}
                                        type='image/avif'
                                        style={{width: '100%'}}
                                    />
                                    <img
                                        src={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-design-widget.png?alt=media&token=d5dc7cf9-b667-4e00-9573-79f03b80f567'}
                                        alt='squarespace-whatsapp-chat'
                                        style={{width: '100%'}}
                                    />
                                </picture>
                                <Container>
                                    <h3>
                                        Add WhatsApp Chat To Squarespace: Guide
                                    </h3>
                                </Container>
                            </div>
                        </Link>
                    </Container>
                </div>

                <div className='rcard'>
                    <Container>
                        <div className='card'>
                            <LiteYouTubeEmbed
                                id='QUGoWPj4l2o'
                                title='Add WhatsApp Chat To Squarespace'
                                style={{width: '100%', height: 290}}
                                allowFullScreen={true}
                            />
                            <Container>
                                <h2 style={{fontWeight: '500', fontSize: '20px'}}>
                                    <h3>
                                        Add WhatsApp Chat To Squarespace: Guide [Video]
                                    </h3>
                                </h2>
                            </Container>
                        </div>
                    </Container>
                </div>
            </div>

            <Container>
                <Link to={'/blog'}>
                    <OutlineButton> Read More</OutlineButton>
                </Link>
            </Container>

        </Layout>
    );
};

const Banner = ({windowWidth}) => {
    if (windowWidth > 480) {
        return (
            <>
                <h1 style={{textAlign: 'center', fontSize: '5vw', lineHeight: '1.5', fontWeight: '600'}}>
                    📞 How To Add WhatsApp Chat To Squarespace Website? 🛍️
                </h1>
                <div style={{fontSize: '2vw', lineHeight: '1.5', fontWeight: '600', marginTop: '20px'}}>
                    SalesJump Is A Quick Easy Tool For That
                </div>
            </>
        );
    } else {
        return (
            <>
                <h1 style={{fontSize: '9vw', textAlign: 'center', lineHeight: '1.3'}}>
                    📞 How To Add WhatsApp Chat To Squarespace Website? 🛍️
                </h1>
                <div style={{fontSize: '4vw', lineHeight: '1.3'}}>
                    SalesJump Is A Quick Easy Tool For That
                </div>
            </>
        );
    }
};

export default IndexPage;
