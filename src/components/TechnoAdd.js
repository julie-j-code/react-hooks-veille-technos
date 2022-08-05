
import { useState } from "react";

export default function TechnoAd(props) {
    const { handleAddTechno } = props;

    const [techno, setTechno] = useState({
        technoname: '',
        category: '',
        description: ''
    });
    function handleSubmit(e) {
        e.preventDefault();
        handleAddTechno(techno)

    }

    function handleChange(e) {
        // console.log(e.target.description);
        const { name, value } = e.target
        setTechno({ ...techno, [name]: value });


    }
    return (
        <div className='techno-add'>
            <h1>Add a Techno</h1>

            {/* comme on ne veut pas que la fonction soit appelée tout de suite mais lui passer un évènement, on utilise, pour rappel, une function flechée ce qui retarde l'appel de handleAddTechno. Par ailleurs, c'est une convention de passer par une function intermédiaire handleSubmit qui elle-même fera appel à handelAddTechno */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="technoname">Name</label>
                <input id='technoname' name='technoname' type="text" value={techno.technoname} onChange={(e) => handleChange(e)} />
                <br />
                <label htmlFor="category">Category</label>
                <select id='category' name='category' type="text" value={techno.category} onChange={(e) => handleChange(e)}>
                    <option value="">Select a category</option>
                    <option value="">Back</option>
                    <option value="">Front</option>
                    <option value="">FullStack</option>
                    <option value="">Autre</option>
                </select>
                <br />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10" value={techno.description} onChange={(e) => handleChange(e)}></textarea>
                <br />

                <input type="submit" />
            </form>

        </div>
    );
}

