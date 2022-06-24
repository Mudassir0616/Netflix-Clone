import React from 'react'
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaRegCopyright} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
        <div className='main-footer'>
        <div className="line">
            <div className='footer-font'>
            <a href="https://www.facebook.com/NetflixIN/"><FaFacebookF size='1.5rem' color='white'/></a>
            <a href="https://www.instagram.com/Netflix_IN/"><FaInstagram size='1.5rem' color='white'/></a>
            <a href="https://twitter.com/netflixindia"><FaTwitter size='1.5rem' color='white'/></a>
            <a href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"><FaYoutube size='1.5rem' color='white'/></a>
            </div>
            <a href="/browse/subtitles"><p>Audio and Subtitles</p></a>
            <a href="https://media.netflix.com/en/"><p>Media Center</p></a>
            <a href="https://help.netflix.com/legal/privacy"><p>Privacy</p></a>
            <a href="https://help.netflix.com/en/contactus"><p>Contact Us</p></a>
        </div>
        <div className="line">
            <a href="/browse/audio-description"><p>Audio Description</p></a>
            <a href="https://ir.netflix.net/ir-overview/profile/default.aspx"><p>Investor Relation</p></a>
            <a href="https://media.netflix.com/en/"><p>Legal Notice</p></a>
        </div>
        <div className="line">
            <a href="https://help.netflix.com/en/"><p>Help Centre</p></a>
            <a href="https://jobs.netflix.com/"><p>Jobs</p></a>
            <a href="https://help.netflix.com/legal/privacy#cookies"><p>Cookie Prefrence</p></a>
        </div>
        <div className="line">
            <a href="/redeem"><p>Gift Card</p></a>
            <a href="https://help.netflix.com/legal/termsofuse"><p>Term of Use</p></a>
            <a href="https://help.netflix.com/legal/corpinfo"><p>Corporate Information</p></a>
        </div>

    </div>

    <button className="service-code">Service Code</button>
    <div className='copy-right'>
        <FaRegCopyright size='0.6rem' color='gray'/>
        1997-2022 Netflix, Inc. dd94c658-c9a2-4b22-bca7-c4839ec3900c 
        </div>
    </div>
    
  )
}

export default Footer