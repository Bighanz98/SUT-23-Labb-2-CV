import React, { useState, useEffect } from "react";

function Portfolio() {
    const [loading, setLoading] = useState(true);
    const [myProjects, setMyProjects] = useState([]);

    useEffect(() => {
        setTimeout(() => {
        fetch('https://api.github.com/users/Bighanz98/repos')
            .then(response => response.json())
            .then(data => {
                setMyProjects(data);
                setLoading(false); 
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
                setLoading(false); 
            });
    }, 1500);
    }, []);

    return (
        <div>
            <h1>Portfolio</h1>
            {loading ? (
                <p className="loading-text">Laddar projekt, vänligen vänta....</p>
            ) : (
                <div className="project-container"> {}
                    {myProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <a href={`https://github.com/Bighanz98/${project.name}`} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Portfolio;