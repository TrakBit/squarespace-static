import React from 'react';
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

const Blog = () => {
    return (
        <Layout >
            <SEO
                title={'SalesJump - Add WhatsApp Chat To Squarespace'}
                description={'Integrate WhatsApp Live Chat Widget With Squarespace'}
                keywords={['Squarespace', 'WhatsApp']}
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
                                        <h2 style={{fontWeight: '500'}}>
                                            WhatsApp Chat For Squarespace
                                        </h2>
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
                                        <h2 style={{fontWeight: '500'}}>
                                            Squarespace store owners help your customers by live chat support
                                        </h2>
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
                                <h2 style={{fontWeight: '500'}}>
                                    Integrating live chat support to your Squarespace isn't just about support
                                </h2>
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
                                <h2 style={{fontWeight: '500'}}>
                                    How to SEO your Squarespace site [2020]: Guide
                                </h2>
                            </Container>
                        </div>
                    </Link>
                </Container>
            </div>
        </Layout>
    );
};

export default Blog;
