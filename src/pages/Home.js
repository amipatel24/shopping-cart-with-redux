import React from "react";
import { Banner, About, Services, OurClients, Teams, Testimonials, ContactUs } from '../components'

function Home() {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <OurClients />
            <Teams />
            <Testimonials />
            <ContactUs />
        </div>
    )
}
export default Home;