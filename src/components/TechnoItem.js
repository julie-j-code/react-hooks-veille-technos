const TechnoItem = (props) => {
    const { techno } = props
    return (
        <div key={techno.technoid} className="card">
            <h2>{techno.technoname}</h2>
            <h3>Category :</h3>
            <h4>{techno.category}</h4>
            <h3>Description :</h3>
            <p>{techno.description}</p>
        </div>
    );
}

export default TechnoItem;
