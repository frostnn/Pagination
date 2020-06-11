import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(()=> {
    const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get('http://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
    setLoading(false)
    }
    fetchPosts();
  }, []);
  console.log(posts)
  return (
   <div className="container">
    <h1>My app</h1>
   </div>
  );
}

export default App;
