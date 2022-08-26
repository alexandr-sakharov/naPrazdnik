import React from 'react';

const Posts = () => {
    return (
        <section id="posts" className="posts">
            <div className="container">
                <h2>Избранные статьи</h2>
                <div className="postslider">
                    <div className="postslide">
                        <a href="post.html" className="link" style={{ backgroundImage: "url(img/post1.png)"}} >
                            <div className="content">
                                <p className="title">6 идей, что подарить <br/> маме на день рождения</p>
                            </div>
                        </a>
                    </div>
                    <div className="postslide">
                        <a href="post.html" className="link" style={{ backgroundImage: "url(img/post2.png)"}}>
                            <div className="content">
                                <p className="title">6 идей, что подарить <br/> подруге на день рождения</p>
                            </div>
                        </a>
                    </div>
                    <div className="postslide">
                        <a href="post.html" className="link" style={{ backgroundImage: "url(img/post3.png)"}}>
                            <div className="content">
                                <p className="title">6 идей, что подарить <br/> парню на день рождения</p>
                            </div>
                        </a>
                    </div>
                    <div className="postslide">
                        <a href="post.html" className="link" style={{ backgroundImage: "url(img/post2.png)"}}>
                            <div className="content">
                                <p className="title">Что подарить <br/> ребенку на день рождения</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Posts;
