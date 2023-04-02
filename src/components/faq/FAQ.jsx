import { useState, forwardRef } from 'react'
import './faq.css'
import down_arrow_path from '../../images/down-arrow.png'

function QnA() {
    const [isAnsHidden, setIsAnsHidden] = useState(true);

    function handleClick() {
        setIsAnsHidden(x => !x);
    }
    
    return <div className={isAnsHidden?'qna':'qna qna-active'}>
        <div className="question-box" onClick={handleClick}>
        <p className="question">What is this shit?</p>
        <img src={down_arrow_path} alt="" className='arrow-img'/>
        </div>
        
        <div className='answer'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, omnis repudiandae? Culpa animi consequatur ipsa nam amet dignissimos quam inventore.</p>
        </div>
    </div>
}
const FAQ = forwardRef((props, ref) => {
    return <section ref={ref} className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-body">
            <QnA />
            <QnA />
            <QnA />
            <QnA />
        </div>
    </section>;
})

export default FAQ;