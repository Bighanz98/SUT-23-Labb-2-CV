
function Portfolio() {
  
    const loadingText = {name: "The site is loading...."};
    const [myProjects, setMyProjects] = useState([]);
   
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
            {myProjects.map(myProjects => (
              <div key={myProjects.id}>
                <h2>{myProjects.name}</h2>
                <p>{myProjects.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default Portfolio;