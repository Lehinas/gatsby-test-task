import React from "react"
import {graphql, Link, PageProps} from "gatsby"
import {item, list, title} from "./index.module.css"
import {HomeData} from "../types"

const Home: React.FC<PageProps<HomeData>> = ({data}) => {
		const posts = data.allMarkdownRemark.edges

		return (
			<div>
					<h1 className={title}>Minecraft Блог</h1>
					<div className={list}>
							{posts.map(({node: post}) => (
								<Link to={post.fields.slug} key={post.fields.slug} className={item}>
										{post.frontmatter.title} — {post.frontmatter.date}
								</Link>
							))}
					</div>
			</div>
		)

}

export default Home

export const query = graphql`
  query PostQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter { title date }
          fields { slug }
        }
      }
    }
  }
`

