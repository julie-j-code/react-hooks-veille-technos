import React from 'react';

const TechnoAdd = (props) => {
    const {handleAddTechno} = props;
    return (
        <div className='techno-add'>
            <h1>Add a Techno</h1>

{/* comme on ne veut pas que la fonction soit appelée tout de suite mais lui passer un évènement, on utilise, pour rappel, une function flechée
ce qui retarde l'appel de handleAddTechno */}
            <form onSubmit={(e)=>handleAddTechno(e)}>
                <label htmlFor="techno-name">Name</label>
                <input id='techno-name' name='techno-name' type="text" />
                <br />
                <label htmlFor="techno-category">Category</label>
                <select id='techno-category' name='techno-category' type="text">
                    <option value="">Select a category</option>
                    <option value="">Back</option>
                    <option value="">Front</option>
                    <option value="">FullStack</option>
                    <option value="">Autre</option>
                </select>
                <br />
                <label htmlFor="description">Name</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
                <br />

                <input type="submit" />
            </form>

        </div>
    );
}

export default TechnoAdd();
