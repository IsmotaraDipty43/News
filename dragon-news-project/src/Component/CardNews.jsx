import React from 'react';
import { FaShareAlt, FaBookmark, FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NewsCard = (props = {}) => {

const {news} = props || {};

  return (
    <div className="card w-full bg-white shadow-lg rounded-lg p-5 mb-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={news.author?.img} alt={news.author?.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold text-gray-800">{news.author?.name || 'Unknown Author'}</p>
            <p className="text-gray-500 text-sm">
              {news.author?.published_date
                ? new Date(news.author.published_date).toLocaleDateString()
                : 'Unknown Date'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      <h2 className="font-bold text-lg text-gray-900 mt-4 mb-2">{news.title || 'No Title Available'}</h2>

      <img
        src={news.thumbnail_url || 'https://via.placeholder.com/150'}
        alt="Thumbnail"
        className="w-full h-[500px] object-cover rounded-md mb-4"
      />

      <p className="text-gray-600 text-sm mb-4">
        {news.details ? (news.details.length > 200 ? news.details.slice(0, 200) + '...' : news.details) : 'No details available'}
      </p>
      <Link to={`/news/${news._id}`} className="text-orange-500 font-semibold mb-4 inline-block">Read More</Link>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center text-yellow-500">
          <FaStar />
          <span className="ml-1 font-semibold text-gray-800">{news.rating?.number || 'N/A'}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye />
          <span className="ml-1">{news.total_view || 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
