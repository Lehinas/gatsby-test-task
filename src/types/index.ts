export interface PostListNode {
		node: {
				frontmatter: { title: string; date: string }
				fields: { slug: string }
		}
}

export interface HomeData {
		allMarkdownRemark: {
				edges: PostListNode[]
		}
}

export interface PostData {
		markdownRemark: {
				html: string
				frontmatter: { title: string; date: string }
		}
}