
function Error({error}) {
  return (
    <div>
      {console.log(error.graphQLErrors)}

      {/* check if there's a network error first then a graphql */}

      <p>{error.message.replace("GraphQL error: ", "")}</p>
    </div>
  );
}

export default Error
