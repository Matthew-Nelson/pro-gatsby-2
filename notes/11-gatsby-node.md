Creating pages programatically

gatsby-node file gives us control of what is being registered and created in gatsby.

we will be creating a new page with a new url and point it to to a react component that we then load up.

it is a node file so we will have to use 'require' syntax, not import.

what do we want out of this? We want to create a page which should be fairly simple.

We have the exports object and the graphql and actions objexts are passed in via the gatsby build tool

'post' is part of node and we dont need to install it. We can simply include it and go from there.

We are creating a new arrow function 'createPages' on the exports object. That function takes the two objects, graphql and actions. These are passed in via gatsby's build tools
