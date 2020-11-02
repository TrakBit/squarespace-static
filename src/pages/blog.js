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

const Blog = () => {
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
                name={' Add WhatsApp Chat To Squaresp'}
                title={'SalesJump |  Add WhatsApp Chat To Squarespce'}
                description={' Add WhatsApp Chat To Squaresp'}
                keywords={['Squarespace', 'Whatsapp']}
                url={'https://salesjump.xyz'}
            />

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
                            <picture>
                                <source
                                    style={{
                                        width: '100%'
                                    }}
                                    type='image/avif'
                                    srcSet={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-support.avif?alt=media&token=c2304f5e-8500-4f4b-96a5-bd61ab71135c'}
                                />
                                <img
                                    style={{
                                        width: '100%'
                                    }}
                                    alt='squarespace-whatsapp'
                                    src={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-support.jpg?alt=media&token=90c525ce-0675-432a-b722-d9b8c8fd3a69'}
                                />
                            </picture>
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

            <div style={{marginBottom: '5%'}}>
                <h1 style={{fontWeight: '600', fontSize: '35px', textAlign: 'center', lineHeight: '1.3'}}>
                    Guide to SEO your Squarespace store for FREE 🙂
                </h1>
                <Container>
                    <Link
                        style={{textDecoration: 'none', color: '#000000', minWidth: '140px', maxWidth: '500px'}}
                        to={'/blog/squarespace-seo-guide'}
                    >
                        <div className='card'>
                            <picture>
                                <source
                                    srcSet={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fdesktop-score.avif?alt=media&token=dbeabdb1-2f88-4936-9078-a6ac2e934183'}
                                    type='image/avif'
                                    style={{width: '100%'}}
                                />
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fdesktop-score.png?alt=media&token=415e759a-189a-4d2a-9504-066ed9b4fde3'}
                                    alt='squarespace-whatsapp-chat'
                                    style={{width: '100%'}}
                                />
                            </picture>
                            <Container>
                                <h4>
                                    <b>
                                        How to SEO your Squarespace site [2020]: Guide
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

export default Blog;
