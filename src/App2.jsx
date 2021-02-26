import { useEffect, useState } from "react"

import { Link, Switch, Route } from "react-router-dom"

import loader from "./loader.gif"

import Post from "./Post"

function App () {

	const [data, setData] = useState({ loading: true, error: null, data: [], })

	useEffect(() => {

		;(async () => {

			const response = await fetch("https://jsonplaceholder.typicode.com/posts")
			const posts = await response.json()

			setData({ loading: false, data: posts, })

		})()

	}, [])

	return (
		<>

			<Switch>

				<Route path="/" exact>

					{
						data.loading && <img alt="alt" src={loader} />
					}


					<ul>
						{
							!data.loading && (
								<>
									{
										data.data.map(post => {

											return <li key={post.id}>
												<Link to={'/post/' + post.id}>{post.title}</Link>
											</li>
										})
									}
								</>
							)
						}
					</ul>
				</Route>

				<Route path="/post/:id" component={Post} exact/>

			</Switch>
		</>
	)
}

export default App
