import { useContext } from 'react';
import CardSwap, { Card } from './Qualification'
import { DataContext } from '../context/DataContext';

const Education = () => {
    const { data } = useContext(DataContext);

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
                    {data?.education?.map((edu) => (
                        <Card key={edu.id} style={getCardStyle(edu.image)}>
                            <h3>{edu.institution}</h3>
                            <p>{edu.qualification} -<span>{edu.year}</span>{edu.details && <><br /> {edu.details}</>} </p>
                        </Card>
                    ))}
                </CardSwap>
            </div>
        </div>

    );
};

export default Education;