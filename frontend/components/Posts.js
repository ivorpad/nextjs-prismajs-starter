import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Error from './Error'

const GET_POSTS = gql`
  query GET_POSTS {
    posts {
      title
      content
      id
    }
  }
`;

function Posts() {
  return (
    <div className="articles mt-24 flex">
      <Query query={GET_POSTS}>
        {({ data, error, loading }) => {
          if (error) return <Error error={error} />;
          if (loading) return <i>loading...</i>;

          return (
            data.posts &&
            data.posts.map(post => (
              <div className="articles__post shadow p-10 m-5" key={post.id}>
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))
          );
        }}
      </Query>
    </div>
  );
}

export default Posts;
export { GET_POSTS }