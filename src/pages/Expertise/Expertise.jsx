import React from 'react';
import './expertise.css'
const Expertise = () => {
    return (
        <div>
            <h1 className='expert-header'>Our Expertise</h1>
            <div className='cards'>
                <div>
                    <div className='singleCard'>
                        <h2>Hiring</h2>
                        <p>Leveraging our deep understanding of the talent landscape, we devise effective hiring strategies to attract the best tech professionals.</p>
                    </div>
                    <div className='singleCard'>
                        <h2>Human Resources Management</h2>
                        <p>We ensure a healthy and productive work environment by implementing efficient HR practices tailored to the unique needs of your startup.</p>
                    </div>
                </div>
                <div>
                    <div className='singleCard'>
                        <h2>Taxation</h2>
                        <p>Our team navigates through the complexities of the tax system, ensuring compliance white optimizing financial efficiency.</p>
                    </div>
                    <div className='singleCard'>
                        <h2>Regulatory Guidance</h2>
                        <p>We stay abreast of the ever-changing regulatory landscape, providing timely advice to ensure your startup's operations stay within legal boundaries.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;