
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
        handleAddTechno(techno);
        setTechno(
            {
                ...techno,
                technoname: '',
                category: '',
                description: ''

            }
        )

    }

    function handleChange(e) {
        // console.log(e.target.description);
        const { name, value } = e.target
        setTechno({ ...techno, [name]: value });


    }
    return (
        <div className='techno-add'>
            <h1>Add a Techno</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="technoname">Name</label>
                <input id='technoname' name='technoname' type="text" value={techno.technoname} onChange={(e) => handleChange(e)} />
                <br />
                <label htmlFor="category">Category</label>
                <select id='category' name='category' type="text" value={techno.category} onChange={(e) => handleChange(e)}>
                    <option value="">Select a category</option>
                    <option value="Back">Back</option>
                    <option value="Front">Front</option>
                    <option value="Fullstack">FullStack</option>
                    <option value="Autre">Autre</option>
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

