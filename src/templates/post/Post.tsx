import React from "react"
import {graphql, Link, PageProps} from "gatsby"
import {container, content} from "./Post.module.css"
import {PostData} from "../../types"

const Post: React.FC<PageProps<PostData>> = ({data}) => {
		const post = data.markdownRemark

		return (
			<div className={container}>
					<Link to="/">← Все посты</Link>
					<h1>{post.frontmatter.title}</h1>
					<p>{post.frontmatter.date}</p>
					<div
						className={content}
						dangerouslySetInnerHTML={{__html: post.html}}
					/>
			</div>
		)
}
export default Post

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter { title date }
    }
  }
`