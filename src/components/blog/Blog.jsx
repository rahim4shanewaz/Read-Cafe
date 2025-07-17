import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmar }) => {

    const {title, cover_img,author, author_img,posted_date,reading_time,hashtags} = blog;
 
    return (
        <div className='mb-4'>
            <img  className='h-96 w-full object-cover rounded-s' src={cover_img} alt="" />
           <div className='flex justify-between items-center '>
             <div className='flex py-4 justify-center gap-2 items-center'>
                <img className='rounded-full w-10 h-10 object-cover' src={author_img} alt="" />
                <div>
                    <h3 className='font-bold text-xl'>{author}</h3>
                    <p className='text-gray-500'>{posted_date}</p>

                </div>
            </div>
            <div className='flex justify-center items-center'>
                <p className='text-slate-500'> {reading_time} mins read sp</p>
                <button onClick= { () => handleBookmar(blog)}>
                    <p className='text-red-500'><FaBookmark /></p>
                </button>
            </div>
           </div>

           <h2 className='text-5xl py-5 font-bold'>{title}</h2>
           <p className='text-slate-500 pb-3'>{hashtags}</p>
           <a className='text-blue-600 hover:text-blue-800 underline' href="">Mark as read</a>


            <hr className='my-4'/>
            
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmar: PropTypes.func
}

export default Blog;