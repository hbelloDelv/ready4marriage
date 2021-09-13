import React from 'react';
import HeroSection from './HeroSection';
import AdvantageSection from './advantageSection/Wrapper'
import SecurityPrioritySection from './securityPrioritySection/Wrapper'

function index() {
    return (
        <div>
            <HeroSection />
            <AdvantageSection />
            <SecurityPrioritySection />
        </div>
    )
}

export default index
