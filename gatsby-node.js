const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
		const { createPage } = actions
		const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter { title date }
            fields { slug }
          }
        }
      }
    }
  `)

		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
				createPage({
						path: node.fields.slug,
						component: path.resolve(`./src/templates/post/Post.tsx`),
						context: { slug: node.fields.slug },
				})
		})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
		const { createNodeField } = actions
		if (node.internal.type === `MarkdownRemark`) {
				const fileNode = getNode(node.parent)
				const slug = `/posts/${fileNode.name}`
				createNodeField({ node, name: `slug`, value: slug })
		}
}
