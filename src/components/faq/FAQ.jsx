import { useState, forwardRef } from 'react'
import './faq.css'
import down_arrow_path from '../../images/down-arrow.png'

function QnA(props) {
    const [isAnsHidden, setIsAnsHidden] = useState(true);

    function handleClick() {
        setIsAnsHidden(x => !x);
    }
    
    return <div className={isAnsHidden?'qna':'qna qna-active'}>
        <div className="question-box" onClick={handleClick}>
        <p className="question">{props.question}</p>
        <img src={down_arrow_path} alt="" className='arrow-img'/>
        </div>
        
        <div className='answer'>
            <p>{props.answer}</p>
        </div>
    </div>
}
const FAQ = forwardRef((props, ref) => {
    return <section ref={ref} className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-body">
            <QnA question="Is my data secure?" answer="Yes! your data is sent through encrypted channels and is only accessible by people who know the unique Device ID"/>
            <QnA question="How many devices am I allowed to use under one account?" answer="As many as you need!"/>
            <QnA question="Am I allowed to rename my devices in the device manager?" answer="Yes! you can rename your devices to personalize the devices and rename them to something more recognisable such as HOME, TANK1, etc."/>
            <QnA question="How accurate are the readings?" answer="We use high quality ultrasonic sensors similar to the ones used in cars, and they have accurate readings within millimetres."/>
            <QnA question="Why did you use Firebase for this project instead of the much easier to use alternatives such as ArduinoIOT" answer="We used Firebase for this project because we wanted more control over our data, and be able to show the data on our own website, this also allowed us to give custom security rules, and make a much more scalable product."/>
        </div>
    </section>;
})

export default FAQ;