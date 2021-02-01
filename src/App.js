import React, { useEffect } from 'react'
import NavbarMain from './components/NavbarMain'
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner, Form, Badge } from 'react-bootstrap'

const App = () => {
  const [posts, setPosts] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  console.log('events', posts)

  useEffect(() => {  
    axios
      .get(`https://wordpress-6mdml6wmaq-lz.a.run.app/?rest_route=/wp/v2/posts`)
      .then(response => {
        console.log('response', response.data)
        setPosts(response.data)
        setLoading(false)
      })
  }, [])

  
  return (
    
    <div className="App">
      <NavbarMain />
      <div>
        <Container className='pt-3 bg-light'>
          {!loading && posts.length > 0
            ? <div>
              {posts.map(post => {
                return (
                  <p key={post.id}>{post.title.rendered}</p>
                )
              })
              }
            </div>
            : <Container className='d-flex justify-content-center py-5'>
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading posts...</span>
              </Spinner>
            </Container>
          }
        </Container>
      </div>
    </div>
  )
}

export default App
