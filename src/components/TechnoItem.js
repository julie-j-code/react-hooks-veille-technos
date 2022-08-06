import { useState } from "react";

const TechnoItem = (props) => {
    const { techno, handleDeleteTechno } = props;
    return (
        <div key={techno.technoid} className="card">
            <h2>{techno.technoname}</h2>
            <h3>Category :</h3>
            <h4>{techno.category}</h4>
            <h3>Description :</h3>
            <p>{techno.description}</p>
            <div className="footer">
                <button className="btn-delete" onClick={() => handleDeleteTechno(techno.technoid)}>delete</button>
            </div>
        </div>
    );
}

export default TechnoItem;
