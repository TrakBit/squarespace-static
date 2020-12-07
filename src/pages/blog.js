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
                keywords={[
                    'How To Add Whatsapp Chat To Squarespace',
                    'Add WhatsApp Chat To Squarespace',
                    'Add WhatsApp To Squarespace',
                    'Whatsapp Chat Squarespace',
                    'Squarespace WhatsApp Integration'
                ]}
                url={'https://salesjump.xyz/blog'}
            />
            <div>
                <br/>
                <h1 style={{textAlign: 'center', lineHeight: '1.3'}}>
                    Blogs on Support, Service and Retention
                </h1>
                <div className='rcards'>
                    <Card
                        link={'/blog/whatsapp-chat-squarespace'}
                        source={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fcover-min.avif?alt=media&token=d36fd7f7-595f-4913-b836-b3e67b356e5a'}
                        image={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp.png?alt=media&token=12475eb1-d5cd-400f-b996-12ecff1850ef'}
                        title={'WhatsApp Chat For Squarespace'}
                    />
                    <Card
                        link={'/blog/squarespace-help-chat-live'}
                        source={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-widget.avif?alt=media&token=8f0b9ef5-f8cf-4cba-8cb8-380ce691cc67'}
                        image={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-widget.jpeg?alt=media&token=3b849960-7dde-4ab7-81a3-27770d0e4ec4'}
                        title={'Squarespace store owners help your customers by live chat support'}
                    />
                </div>
            </div>

            <div style={{marginBottom: '5%'}}>
                <div className='rcards'>
                    <Card
                        link={'/blog/squarespace-store-live-chat-support'}
                        source={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-support.avif?alt=media&token=c2304f5e-8500-4f4b-96a5-bd61ab71135c'}
                        image={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-support.jpg?alt=media&token=90c525ce-0675-432a-b722-d9b8c8fd3a69'}
                        title={`Integrating live chat support to your Squarespace isn't just about support`}
                    />
                    <Card
                        link={'/blog/squarespace-seo-guide'}
                        source={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fdesktop-score.avif?alt=media&token=dbeabdb1-2f88-4936-9078-a6ac2e934183'}
                        image={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fdesktop-score.png?alt=media&token=415e759a-189a-4d2a-9504-066ed9b4fde3'}
                        title={`How to SEO your Squarespace site [2020]: Guide`}
                    />
                </div>
            </div>

            <div className='rcards'>
                <Card
                    link={'/blog/squarespace-membership-subscription'}
                    source={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-membership.avif?alt=media&token=efa9b1bd-03b5-4e4b-91b3-555348e421f0'}
                    image={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-membership.jpg?alt=media&token=69d797ed-3468-4c8e-a408-7fb36c8cf448'}
                    title={`How To Grow Your Squarespace Membership Site: Guide`}
                />
                <Card
                    link={'/blog/live-chat-phone-support'}
                    source={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-live-chat.avif?alt=media&token=efa9b1bd-03b5-4e4b-91b3-555348e421f0'}
                    image={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-live-chat.jpg?alt=media&token=69d797ed-3468-4c8e-a408-7fb36c8cf448'}
                    title={`Live Chat Support or Phone Support in 2021? How About Both?`}
                />
            </div>

            <div className='rcards'>

                <Card
                    link={'/blog/live-chat-support-squarespace-whatsapp-rethink'}
                    source={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-chat-funnel.avif?alt=media&token=124eee9e-4d95-4f0e-8e32-9c88a90d252e'}
                    image={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-whatsapp-chat-funnel.png?alt=media&token=124eee9e-4d95-4f0e-8e32-9c88a90d252e'}
                    title={`Rethinking Live Chat Support For Squarespace`}
                />
                <Card
                    link={'/blog/squarespace-memeber-areas-review'}
                    source={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-membership-review.avif?alt=media&token=205a3fa7-7a14-4f96-bc50-bb86dd277a8d'}
                    image={'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fsquarespace-membership-review.jpg?alt=media&token=fd8d2704-8990-4d64-adda-eaef6701e659'}
                    title={`Setting Up Squarespace Member Areas: Review`}
                />
            </div>
        </Layout>
    );
};

const Card = ({link, source, image, title}) => {
    return (
        <div className='rcard'>
            <Container>
                <Link
                    style={{textDecoration: 'none', color: '#000000', minWidth: '140px', maxWidth: '500px'}}
                    to={link}
                >
                    <div className='card'>
                        <picture>
                            <source
                                style={{
                                    width: '100%'
                                }}
                                type='image/avif'
                                srcSet={source}
                            />
                            <img
                                style={{
                                    width: '100%'
                                }}
                                alt='squarespace-whatsapp'
                                src={image}
                            />
                        </picture>
                        <Container>
                            <h2 style={{fontWeight: '500', fontSize: '20px'}}>
                                {title}
                            </h2>
                        </Container>
                    </div>
                </Link>
            </Container>
        </div>
    );
};

export default Blog;
