import React from 'react';
import Review from "./Review";

const Reviews = () => {
    const reviews = [
        {name: 'test', sub: 'test', rate: 3, text: 'test', img: 'img/r2.png'},
        {name: 'test', sub: 'test', rate: 3, text: 'test', img: 'img/r2.png'},
        {name: 'test', sub: 'test', rate: 3, text: 'test', img: 'img/r2.png'},
    ]
    return (
        <section id="reviews" className="reviews">
            <div className="container">
                <h2>Отзывы наших клиентов</h2>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        {reviews.map(review => <Review/>)}
                    </div>
                    <div className="col-xs-12 col-md-4">
                        {reviews.map(review => <Review/>)}
                    </div>
                    <div className="col-xs-12 col-md-4">
                        {reviews.map(review => <Review/>)}
                    </div>
                </div>
                <button className="morereviews">Показать ещё <svg width="10" height="6" viewBox="0 0 10 6"
                                                                  fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.33147e-08 0.882655C5.62391e-08 0.656005 0.0991863 0.438073 0.28764 0.263727C0.674467 -0.0762472 1.30926 -0.0762472 1.69608 0.263727L4.71135 2.90507L7.72661 0.25501C8.11344 -0.0849641 8.74823 -0.0849641 9.13505 0.25501C9.52188 0.594984 9.52188 1.15289 9.13505 1.49286L5.41557 4.76185C5.22712 4.92748 4.97915 5.01465 4.71135 5.01465C4.44354 5.01465 4.19558 4.91876 4.00712 4.76185L0.28764 1.50158C0.0991863 1.32724 5.05027e-08 1.10059 5.33147e-08 0.882655Z"
                        fill="#FF6B45"/>
                </svg></button>
            </div>
        </section>
    );
};

export default Reviews;
