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
                description={'Blogs on improving Squarespace customer support by integrating live chat'}
                keywords={['Squarespace', 'WhatsApp']}
                url={'https://salesjump.xyz/blog'}
            />
            <div>
                <br/>
                <h1 style={{textAlign: 'center', lineHeight: '1.3'}}>
                    Blogs on Support, Service and Retention
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
                                        <h2 style={{fontWeight: '500', fontSize: '20px'}}>
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
                                to={'/blog/squarespace-help-chat-live'}
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
                                        <h2 style={{fontWeight: '500', fontSize: '20px'}}>
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
                <div className='rcards'>
                    <div className='rcard'>
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
                                        <h2 style={{fontWeight: '500', fontSize: '20px'}}>
                                            Integrating live chat support to your Squarespace isn't just about support
                                        </h2>
                                    </Container>
                                </div>
                            </Link>
                        </Container>
                    </div>

                    <div className='rcard'>
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
                                        <h2 style={{fontWeight: '500', fontSize: '20px'}}>
                                            How to SEO your Squarespace site [2020]: Guide
                                        </h2>
                                    </Container>
                                </div>
                            </Link>
                        </Container>
                    </div>
                </div>
            </div>

            <div className='rcards'>
                <div className='rcard'>
                    <Container>
                        <Link
                            style={{textDecoration: 'none', color: '#000000', minWidth: '140px', maxWidth: '500px'}}
                            to={'/blog/squarespace-membership-subscription'}
                        >
                            <div className='card'>
                                <picture>
                                    <source
                                        style={{
                                            width: '100%'
                                        }}
                                        type='image/avif'
                                        srcSet={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-membership.avif?alt=media&token=efa9b1bd-03b5-4e4b-91b3-555348e421f0'}
                                    />
                                    <img
                                        style={{
                                            width: '100%'
                                        }}
                                        alt='squarespace-whatsapp'
                                        src={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-membership.jpg?alt=media&token=69d797ed-3468-4c8e-a408-7fb36c8cf448'}
                                    />
                                </picture>
                                <Container>
                                    <h2 style={{fontWeight: '500', fontSize: '20px'}}>
                                        How To Grow Your Squarespace Membership Site: Guide
                                    </h2>
                                </Container>
                            </div>
                        </Link>
                    </Container>
                </div>

            </div>
        </Layout>
    );
};

export default Blog;
