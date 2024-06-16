import {advantagesList, reviewsList} from "../components/constants";
import "../css/big.css"
import "../css/small.css"
import "../css/medium.css"
import "../css/extra-big.css"
import {renderStars} from "../components/render-stars";

function App() {

    return (
        <div className="godmanai">
            <div className="first-blur-element"></div>
            <div className="second-blur-element"></div>
            <div className="centered-blur-box"></div>
            <div className="rise-with-ai-powered-sales-parent">
                <b className="rise-with-ai-powered">Rise with AI-powered Sales</b>
                <div className="welcome-to-the">
                    Welcome to the world of Godman.AI — the powerful chatbot constructor
                    for businesses that wants to make learning and selling customer
                    products a breeze. Unleash the power of AI to take your business to
                    new heights!
                </div>
            </div>
            <div className="frame-parent">
                <div className="feature-container">
                    {advantagesList.map((advantage) => (
                        <div className="feature" key={advantage.id}>
                            <div className="title">
                                <svg className="svg-size" width="21" height="21" viewBox="0 0 21 21" fill="#5ec6fa" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.88558 6.73021C-0.365196 9.98101 -0.365196 15.2516 2.88558 18.5024C6.13637 21.7532 11.4069 21.7532 14.6577 18.5024C17.9085 15.2516 23.1405 4.74892 19.8898 1.49812C16.639 -1.75268 6.13637 3.4794 2.88558 6.73021Z" fill="#5EC6FA" />
                                </svg>
                                <b className="fast-learning">{advantage.label}</b>
                            </div>
                            <div className="our-ai-chatbot">{advantage.description}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="loved-by-our-users-parent">
                <b className="loved-by-our-users">Loved by Our Users</b>
                <div className="godmans-ai-chatbot">
                    Godman’s AI chatbot is built to grow and adapt as your business
                    evolves, constantly improving sales tactics, and enhancing customer
                    relationships!
                </div>
            </div>
            <div className="frame-group">
                <div className="review-card-container">
                    {reviewsList.map((review, index) => (
                        index % 2 === 0 && (
                            <div key={review.id} className="grid-item">
                                <div className="review-card">
                                    <div className="stars">
                                        {renderStars(review.grade)}
                                    </div>
                                    <div className="review-text">
                                        <div className="review">{review.text}</div>
                                        <div className="name">- {review.userName}</div>
                                    </div>
                                </div>
                                {reviewsList[index + 1] && (
                                    <div className="review-card">
                                        <div className="stars">
                                            {renderStars(reviewsList[index + 1].grade)}
                                        </div>
                                        <div className="review-text">
                                            <div className="review">{reviewsList[index + 1].text}</div>
                                            <div className="name">- {reviewsList[index + 1].userName}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
