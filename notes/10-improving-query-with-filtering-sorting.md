We are cleaning up our query so our react component is a little more concise! This is more readable and we can even move them into another file if necessary. I am going to try that now.

I needed to import the query and such but it works! Very cool.

Okay that was fucking weird. Sometimes there is weird cacheing stuff it looks like.

Note that adding the limit and sort and such are options that are built into allMarkdownRemark and do NOT stand alone in graphql.

```
const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          id
        }
      }
    }
  }
`;
```
