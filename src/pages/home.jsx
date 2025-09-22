import React, { useEffect, useState } from 'react'
import './styles/home.css'
import { PostCard } from '@cards'
import { GreenButton } from '@buttons';

const LoadingScreen = () => {

    const [loadingPostMessage, setLoadingPostMessage] = useState("Loading posts")

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingPostMessage(prev => {
                if (prev === "Loading posts...") return "Loading posts"
                return prev + "."
            })
        }, 800)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="loading-screen">
            <p>{loadingPostMessage}</p>
        </div>
    )
}

const Home = () => {

    const [postData, setPostData] = useState(null);
    const [searchValue, setSearchValue] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await fetch(`https://api.mcpedl.com/api/submissions?user_nickname=bruhh69&include_skins=1&per_page=10&page=${currentPage}`)
                const data = await res.json()
                setPostData(data)
            } catch (e) {
                console.log(e.message)
            }
        }
        fetchPost()
    }, [currentPage])

    if (!postData) return <LoadingScreen />

    const postCount = postData.data.length
    console.log(postCount)

    return (
        <main>
            <div className="home-heading">
                {
                    currentPage <= 1 ? <div className="ore-button empty"></div> :
                        <GreenButton
                            childElement={<p>prev</p>}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                        />
                }
                <input
                    type="text"
                    id="searchPost"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    placeholder="Search posts..."
                />
                {
                    postCount < 10 ? <div className="ore-button empty"></div> :
                        <GreenButton
                            childElement={<p>next</p>}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                        />
                }
            </div>
            <div className="posts-wrapper">
                <PostCard
                    postlist={
                        postData.data.filter(post =>
                            post.title.toLowerCase().includes(searchValue.toLowerCase())
                        )
                    }
                />
            </div>
        </main>
    )
}

export default Home
