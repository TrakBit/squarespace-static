import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

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
                name={'Whatsapp Chat For Squarespace'}
                title={'SalesJump | Whatsapp Chat For Squarespace'}
                description={'Whatsapp Chat For Squarespace'}
                keywords={['Squarespace', 'Whatsapp']}
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
                            srcSet={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fcover-min.avif?alt=media&token=d36fd7f7-595f-4913-b836-b3e67b356e5a'}
                        />
                        <img
                            style={{
                                width: '90%',
                                borderImageWidth: '2px',
                                borderColor: '#00000',
                                paddingTop: '70px'
                            }}
                            alt='squarespace whatsapp'
                            src={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp.png?alt=media&token=12475eb1-d5cd-400f-b996-12ecff1850ef'}
                        />
                    </picture>
                </Container>
            </div>

            <Container style={{margin: '0 auto', width: screenWidth}}>
                <h1 style={{fontWeight: '600', fontSize: '35px', textAlign: 'center', lineHeight: '1.3'}}>
                    But why add a WhatsApp chat ?
                </h1>
                <div style={{fontSize: '25px', marginTop: '20px', lineHeight: '1.3'}}>
                    Modern online businesses run on<a style={highlight}><b>{' small town rules. '}</b></a>
                    There needs to be a personal connection between you and the customer.
                </div>
            </Container>

            <Container style={{margin: '0 auto', width: screenWidth}}>
                <h1 style={{fontWeight: '600', fontSize: '35px', textAlign: 'center', marginTop: '20px', lineHeight: '1.3'}}>
                    Your customer have questions and they are looking for answers.
                </h1>
                <p style={{fontSize: '25px', marginTop: '20px', lineHeight: '1.3'}}>
                    Customers wanna know
                    <a style={highlight}><b>{' if there are more selections '}</b></a>
                    and <a style={highlight}><b>{' when will it be shipped '}</b></a>, your presence is needed
                </p>
            </Container>

            <Container style={{margin: '0 auto', width: screenWidth}}>
                <h1 style={{fontSize: '45px', textAlign: 'center', lineHeight: '1.2', fontWeight: '600'}}>
                    Why wait, when a 2 minute setup is all it takes
                </h1>
                <br/>
                <a href={'https://app.salesjump.xyz/register'}><OutlineButton> JOIN</OutlineButton></a>
                <br/>
            </Container>

            <div style={{textAlign: 'center', backgroundColor: '#f4f9f4', borderRadius: '30px', width: '90%', marginLeft: '5%'}}>
                <br/>
                <h1 style={heading}>{'Monthly Subscription'}</h1>
                <div style={{marginTop: '1%', marginBottom: '5%'}}>
                    <h1 style={price}>
                        $9
                    </h1>
                </div>
            </div>

            <div>
                <h1 style={{fontWeight: '600', fontSize: '35px', textAlign: 'center', lineHeight: '1.3'}}>
                    Step by step guide for setup
                </h1>
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
                                <h4>
                                    <b>
                                        A guide on how to integrate whatsapp chat to squarespace for live support
                                    </b>
                                </h4>
                            </Container>
                        </div>
                    </Link>
                </Container>
            </div>

            <div>
                <br/>
                <h1 style={{fontWeight: '600', fontSize: '35px', textAlign: 'center', lineHeight: '1.3'}}>
                    Read more on why you need WhatsApp support for Squarespace
                </h1>
                <div className='rcards'>
                    <div className='rcard'>

                        <Container>
                            <Link
                                style={{textDecoration: 'none', color: '#000000'}}
                                to={'/blog/whatsapp-chat-squarespace'}
                            >
                                <div className='card'>
                                    <picture>
                                        <source
                                            style={{
                                                width: '100%'
                                            }}
                                            type='image/avif'
                                            srcSet={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fcover-min.avif?alt=media&token=d36fd7f7-595f-4913-b836-b3e67b356e5a'}
                                        />
                                        <img
                                            style={{
                                                width: '100%'
                                            }}
                                            alt='squarespace-whatsapp'
                                            src={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp.png?alt=media&token=12475eb1-d5cd-400f-b996-12ecff1850ef'}
                                        />
                                    </picture>
                                    <Container>
                                        <h4>
                                            <b>
                                                WhatsApp Chat For Squarespace
                                            </b>
                                        </h4>
                                    </Container>
                                </div>
                            </Link>
                        </Container>
                    </div>

                    <div className='rcard'>
                        <Container>
                            <Link
                                style={{textDecoration: 'none', color: '#000000'}}
                                href={'/blog/squarespace-help-chat-live'}
                            >
                                <div className='card'>
                                    <picture>
                                        <source
                                            style={{
                                                width: '100%'
                                            }}
                                            type='image/avif'
                                            srcSet={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-widget.avif?alt=media&token=8f0b9ef5-f8cf-4cba-8cb8-380ce691cc67'}
                                        />
                                        <img
                                            style={{
                                                width: '100%'
                                            }}
                                            alt='squarespace-whatsapp'
                                            src={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-widget.jpeg?alt=media&token=3b849960-7dde-4ab7-81a3-27770d0e4ec4'}
                                        />
                                    </picture>
                                    <Container>
                                        <h4 >
                                            <b>
                                                Squarespace store owners help your customers by live chat support
                                            </b>
                                        </h4>
                                    </Container>
                                </div>
                            </Link>
                        </Container>
                    </div>
                </div>
            </div>

            <div style={{marginBottom: '5%'}}>
                <h1 style={{fontWeight: '600', fontSize: '35px', textAlign: 'center', lineHeight: '1.3'}}>
                    Add live chat support to Squarespace. But why?
                </h1>
                <Container>
                    <Link
                        style={{textDecoration: 'none', color: '#000000', minWidth: '140px', maxWidth: '500px'}}
                        to={'/blog/squarespace-store-live-chat-support'}
                    >
                        <div className='card'>
                            <div style={{backgroundColor: 'pink'}}>
                                <h1 style={{fontWeight: '600', fontSize: '150px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center'}}>
                                    📞
                                </h1>
                            </div>
                            <Container>
                                <h4>
                                    <b>
                                        Integrating live chat support to your Squarespace isn't just about support
                                    </b>
                                </h4>
                            </Container>
                        </div>
                    </Link>
                </Container>
            </div>

        </Layout>
    );
};

const Banner = ({windowWidth}) => {
    if (windowWidth > 480) {
        return (
            <>
                <h1 style={{fontSize: '5vw', lineHeight: '1.5', fontWeight: '600'}}>
                    📞 WhatsApp Chat on your
                    <br/>Squarespace online store. 🛍️
                </h1>
                <h1 style={{fontSize: '2vw', lineHeight: '1.5', fontWeight: '600', marginTop: '20px'}}>
                    Add the human touch to your store
                </h1>
            </>
        );
    } else {
        return (
            <>
                <h1 style={{fontSize: '9vw', textAlign: 'center', lineHeight: '1.3'}}>
                    📞 WhatsApp Chat on your
                    <br/>Squarespace online store. 🛍️
                </h1>
                <h1 style={{fontSize: '4vw', lineHeight: '1.3'}}>
                    Add the human touch to your store
                </h1>
            </>
        );
    }
};

export default IndexPage;
