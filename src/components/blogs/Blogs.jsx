import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmar}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog
                 key={blog.id}  
                    blog={blog}
                    handleBookmar={handleBookmar}
                
                ></Blog>)
            }
            
        </div>
    );
};
Blogs.prototypes = {
    handleBookmar: PropTypes.func
}
export default Blogs;