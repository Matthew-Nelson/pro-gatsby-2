gatsby-image, gatsby-plugin-sharp, gatsby-transformer-sharp.

A suite of plugins that must be used in conjunction. Will allow us to take images, transform them from node information and use them in awesome ways. Let's learn more...

Need to add it to our gatsby config via the gatsby-source-filesystem so we create them as nodes that graphql can then get a hold of.

fixedImage vs fluidImage

Fixed image we know the set size of the image and fluid image we dont know the size. What does this mean for me?

THIS IS SO FUCKING COOL. There are a ton of options when working with this stuff so just go through and see what you need.

```
...GatsbyImageSharpFluid
```

this is a fragment and will break the graphiql testing tool. So while there will be errors there, test in your actual application and it will be just fine.
