import React, { useEffect } from 'react';
import './index.css';


const Tabs = () => {
    
    useEffect( () => {
        var radio = document.getElementById("tab1");
        radio.checked = true;
        }, []
    )

    return (
        <>
            <section className="tab-section">
            <div className="rt-container">
                <div className="col-rt-12">
                    
                    <div className="conveytabs">
                    <input id="tab1" type="radio" name="tabs" />
                    <label htmlFor="tab1"><span className='emoji'>&#x1f4bb;</span> Experience</label>
                        
                    <input id="tab2" type="radio" name="tabs" />
                    <label htmlFor="tab2"><span className='emoji'>&#x1f433;</span> Technologies</label>
                        
                    <input id="tab3" type="radio" name="tabs" />
                    <label htmlFor="tab3"><span className='emoji'>&#x1f393;</span> Education</label>
    
                    <input id="tab4" type="radio" name="tabs" />
                    <label htmlFor="tab4"><span className='emoji'>&#x1f320;</span> Achievements</label>

                    <section id="content1">
                    <h2>Work Experience</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas iure, ullam porro incidunt velit assumenda in expedita totam ipsa accusantium dignissimos quidem similique veniam mollitia? Incidunt, suscipit? Assumenda, amet repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, incidunt voluptates. Cum porro animi optio minima totam debitis temporibus, consequatur incidunt doloremque. Cum quam reprehenderit ad tempora ex nostrum accusantium.
                        </p>
                    </section>
                        
                    <section id="content2"> 
                    <h2>Skills & Technologies</h2>
                        <TechnologiesList />
                    </section>

                    <section id="content3">
                        <h2>My Education</h2>
                        
                        <p>
                            <b>Cybersecurity MSc (Sep 2020 - Sep 2021) - King’s College London</b>
                            <li>Pass with Merit</li>
                        </p>
                        <p>
                            <b>Mathematics BSc (Sep 2017 - Aug 2020) - King's College London</b> 
                            <li>First Class Honours</li>
                        </p>
                        <p>
                            <b>A-Levels (2017) - Plumstead Manor Sixth Form</b>
                            <li>Mathematics - A*</li>
                            <li>Further Maths - A*</li>
                            <li>Chemistry - C</li>
                        </p>

                        <p>
                            <b>AS-Levels (2016) - Plumstead Manor Sixth Form</b>
                            <li>Biology - B</li>
                        </p>

                        <p>
                            <b>GCSEs (2015) - Plumstead Manor Secondary School</b>
                            <li>A* - Mathematics, Biology, Geography, French, Textiles, Religious Education</li>
                            <li>A  - Physics, Chemistry, English Language, English Literature, Statistics</li>
                        </p>
                    </section>
                        
                    <section id="content4">
                    <h2>My Achievements</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque consectetur neque eum maxime voluptas obcaecati aperiam assumenda iure, sed nobis, provident tempore rem sit fugit aliquam accusamus quos ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro expedita voluptatibus nam qui, tenetur eius sint officiis nostrum numquam quod laborum fuga. Perferendis, distinctio? Aliquam a sed at hic! In!
                        </p>
                    </section>
                        
                    </div>
                
            
                </div>
            </div>
        </section>
        <br /><br /><br />
    
        </>
    )

}

export default Tabs;

