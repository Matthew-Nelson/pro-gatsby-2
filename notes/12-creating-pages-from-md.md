Okay, so in this one, we are creating a new Promise with the require (resolve, reject). We are creating a graphql query using that syntax and then chaining off of it into our JS logic via the promis that is returns.

THe {node} is being destructured out of the results, upon which we are grabbing our frontmatter.slug which is the only thing we queried for. This well then get passed into the function create page.

This function accepts three props

1. path
2. component
3. context

context allows us to pass data into the template itself that we will then be able to query off of
