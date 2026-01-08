import CardSwap, { Card } from './Qualification'
// Import images directly
import img1 from '../assets/img1.jpg';
import ycisImg from '../assets/Ycis.jpeg';
import fsgImg from '../assets/FSG.jpeg';

const Education = () => {
    // Helper function for card styles
    const getCardStyle = (image) => ({
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    });

    return (

        <div className="education-container">
            <div className="education-text">
                <h2>Education &<br />Qualification</h2>
                <p>My academic journey and certifications.</p>
            </div>
            <div className="education-cards">
                <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={false}
                >
                    <Card style={getCardStyle(img1)}>
                        <h3>KisanVeer Mahavidyalaya Wai</h3>
                        <p>HSC SCIENCE PCMB -<span>2018</span><br /></p>
                    </Card>
                    <Card style={getCardStyle(ycisImg)}>
                        <h3>Yashwantrao Chavan Institute of Science Satara</h3>
                        <p>B.voc Computer Science -<span>2022-2025</span> First CLass </p>
                    </Card>
                    <Card style={getCardStyle(fsgImg)}>
                        <h3>FullstackGuru It Solutions Pune</h3>
                        <p> Java Full Stack Development -<span>2025-2026</span> </p>
                    </Card>
                </CardSwap>
            </div>
        </div>

    );
};

export default Education;