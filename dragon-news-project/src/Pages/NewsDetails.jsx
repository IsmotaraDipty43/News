import React from 'react';
import Header from '../Component/Header';
import RightNav from '../Component/Layoutcomponent/RightNav';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
const NewsDetails = () => {
    const data = useLoaderData();
    const news= data.data[0];
    // console.log(news);
    return (
        <div>
            <Header></Header>
            <main className='w-full md:w-10/12 m-auto grid grid-cols-1 p-5 md:p-0 md:grid-cols-12 gap-5 mt-10'>
           <section className='col-span-9'>
            <h1 className='font-semibold mb-3 text-xl'>Dragon News</h1>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={news?.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{news.title}</h2>
    <p>{news?.details}</p>
    <div className="card-actions">
      <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to Category</Link>
    </div>
  </div>
</div>
           </section>
           <aside className='col-span-3 '>
              <RightNav></RightNav>
           </aside>
            </main>
        </div>
    );
};

export default NewsDetails;