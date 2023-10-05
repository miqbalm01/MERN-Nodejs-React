import React from 'react'
import {ig, lk, tw,logo} from '../../../assets';
import './footer.css';

const Icon = ({img}) => {
    return (
      <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt='img1' />
      </div>
    )
  }

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div>
                <img className="logo" src={logo} />
            </div>
            <div className='social-wrapper'>
                <Icon img={ig} alt='img1' />
                <Icon img={tw} alt='img2' />
                <Icon img={lk} alt='img3' />
            </div>
        </div>
        <div className='copyright'>
            <p className='copyright-font'>Copyright</p>
        </div>
    </div>
  )
}

export default Footer