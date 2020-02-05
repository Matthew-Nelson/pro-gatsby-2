gatsby-source-filesystem will create nodes for us from files. They can be different file types like markdown, json etc. Check the plugin library for further file type integrations.

```
{
	site {
    siteMetadata {
      title
      description
      author
      hola
    }
  }
  allFile {
    edges {
      node {
        extension
        name
        body
      }
    }
  }
}
```
