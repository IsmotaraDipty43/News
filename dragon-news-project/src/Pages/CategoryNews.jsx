import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardNews from '../Component/CardNews';

const CategoryNews = () => {
    const {data : news} = useLoaderData()
    // console.log(news);
    return (
        <div>
            <h2 className='font-semibold mb-2'>Dragon News Home</h2>
            <p className='text-gray-400 text-base'>{news.length} News Found on this Category</p>
            <div>
                {news.map(singleNews=><CardNews key={singleNews.id} news={singleNews}></CardNews>)}
            </div>
        </div>
    );
};

export default CategoryNews;