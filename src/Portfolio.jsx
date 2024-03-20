
function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://api.github.com/users/Bighanz98/repos')
        .then(response => response.json())
        .then(data => {
          setProjects(data);
         setLoading(false);
        })
        .catch(error => console.error('Error fetching projects:', error));
    }, []);
  
    return (
      <div>
        <h1>Portfolio</h1>
        {loading ? (
          <p>Laddar projekt...</p>
        ) : (
          <div>
            {projects.map(project => (
              <div key={project.id}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default Portfolio;