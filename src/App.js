import React, {useState, useMemo} from 'react';
import Counter from './components/counter/Counter';
import './components/styles/style.css'
import PostList from './components/postList/PostList';
import PostForm from './components/postForm/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'JS2', body: 'Description'},
    {id: 3, title: 'JS3', body: 'Description'},
    {id: 4, title: 'JS4', body: 'Description'}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log('worked')
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>      
      <Counter/>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Add user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Evgen'}/>
    </div>
  );
}

export default App;
