import type {GatsbyConfig} from "gatsby"

const config: GatsbyConfig = {
		siteMetadata: {
				siteUrl: `https://www.yourdomain.tld`,
				title: "Блог майнкрафт для ТЗ"
		},
		// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
		// If you use VSCode you can also use the GraphQL plugin
		// Learn more at: https://gatsby.dev/graphql-typegen
		graphqlTypegen: true,
		plugins: [
				{
						resolve: "gatsby-source-filesystem",
						options: {
								name: `data`,
								path: `${__dirname}/src/content/posts`,
						},
				},
				`gatsby-transformer-remark`
		],
}

export default config
