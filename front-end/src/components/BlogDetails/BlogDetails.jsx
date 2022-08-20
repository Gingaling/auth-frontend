import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../useFetch/useFetch';
import './BlogDetails.css'

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } =  useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
     );
}
 
export default BlogDetails;