import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-5 items-center bg-gray-100 p-2'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1 font-bold'>Latest</p>
            <Marquee className='space-x-10' pauseOnHover={true} speed={70}>
                <Link to='/news'>Donald Trump’s campaign has appointed former ICE director Thomas Homan as the “border czar.” Homan, known for supporting the controversial child separation policy during Trump’s first term, intends to revive strict immigration measures, prioritizing workplace arrests of undocumented immigrants and advocating for mass deportations. </Link>
            <Link to='/news'>Over 100 people have died following catastrophic flooding and landslides caused by Tropical Storm Trami in the Philippines.</Link>
            <Link to='/news'>U.S. President Joe Biden and Chinese President Xi Jinping are expected to meet at the Asia-Pacific Economic Cooperation (APEC) summit in San Francisco.</Link>
            <Link to='/news'>The situation in Gaza remains critical, with humanitarian aid convoys continuing to enter the region.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;