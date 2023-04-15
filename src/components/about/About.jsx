import { forwardRef } from 'react'
import './about.css'

const About = forwardRef((props, ref) => {
    return <section ref={ref} className="about-section">
        <h2>ABOUT</h2>
        <p>It's no secret that water is crucial for our survival and is one of our basic human needs. And with so many communities not even having safe water to drink, and having large water shortages, we need to give our best efforts to conserve it and not waste it.</p>
        <p>But sometimes we find a tap running that we accidentally left open for who knows how long and now we don't know how much water we have left and our water bill goes up, or we simply don't know if we are wasting any water or what time of day do we consume the largest amount of water in a day.</p>
        <p>We believe, what ever gets measured gets managed</p>
        <p>And so Smart HydroTracker helps you keep track of the amount of water you have in your tank at all times by sending the data directly to your smart devices</p>
        <p>It is an easy, smart and secure way to manage your water levels and thus be aware of your water consumption levels</p>
        <p>How does it work? Smart HydroTracker is a device that is installed on top of your water tank where it senses the height of your water levels. The readings can be read using the easy to use console on the device itself and the data is also send over to the firebase cloud where the data can be accessed through our website using the unique Device ID displayed on your Smart HydroTracker</p>
    </section>
})

export default About;