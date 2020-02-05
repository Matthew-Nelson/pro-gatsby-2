gatsby-transformer-remark is a plugin that understands a lot more about our file than us and creates nodes for us to access via graphql. This makes it possible to use the information stored within or MD files in a meaningful way.

```
{
  allMarkdownRemark {
    totalCount
    edges {
      node {
        html
        excerpt
        timeToRead
        frontmatter {
          title
		  date(formatString: "MMMM DD, YYYY")
          slug
        }
      }
    }
  }
}
```
