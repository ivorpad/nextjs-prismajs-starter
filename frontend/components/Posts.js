import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Error from './Error'

const GET_POSTS = gql`
  query GET_POSTS {
    posts {
      title
      id
    }
  }
`;

function Posts() {
  return (
    <Query query={GET_POSTS}>
      {({data, error, loading}) => {
        
        if (error) return <Error error={error} />
        if(loading) return <i>loading...</i>
          
        return data.posts && data.posts.map(p => (
          <div key={p.id}>
            <p>{p.title}</p>
          </div>
        ));
      }}
    </Query>
  )
}

export default Posts;
export { GET_POSTS }