import React, {useState, useRef} from 'react';
import Counter from './components/counter/Counter';
import './components/styles/style.css'
import PostList from './components/postList/PostList';
import PostForm from './components/postForm/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'JS2', body: 'Description'},
    {id: 3, title: 'JS3', body: 'Description'},
    {id: 4, title: 'JS4', body: 'Description'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>      
      <Counter/>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <select>
          <option value="value1">For name</option>
          <option value="value2">For description</option>
        </select>
      </div>
      {
        posts.length !==0
        ? <PostList remove={removePost} posts={posts} title={'Evgen'}/>
        : <h2 style={{textAlign: 'center'}}>
            Posts not found!
          </h2>
      }      
    </div>
  );
}

export default App;
