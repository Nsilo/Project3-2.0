import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from './Button'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to receive Updates
        </p>
        <p className='footer-subscription-text'>
          You can subscribe here
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Project</Link>
            <Link to='/'>Persentation</Link>
            <Link to='/'>Tecnologies</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Team</h2>
            <Link to='/'>Sudan</Link>
            <Link to='/'>Jivaka</Link>
            <Link to='/'>Kathy</Link>
            <Link to='/'>Franco</Link>
            <Link to='/'>Lester</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>UC Berkeley Extension</h2>
            <Link to='/'>info</Link>
            <Link to='/'>Bootcamp</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Spotify</Link>
            <Link to='/'>Itunes</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            GroovIn
            </Link>
          </div>
          <small class='website-rights'>Team Berlin © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link Github'
              to='/'
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
