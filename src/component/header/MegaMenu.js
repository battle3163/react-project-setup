import { Link } from "react-router-dom";
function MegaMenu({ mega, classes }) {
    return (
        <div className={`mega-menu-wrapper ${classes}`}>
            {
                mega.map((secondLevel, index) => {
                    return <div className={`mega-munu-block nav_ w-full w-[180px] mega-div px-10`} key={index}>
                        <Link to={secondLevel.to} className={`${secondLevel.title.includes("Hidden") && "hidden"}`}>
                             <div className='title-wrapper'>
                            <img src={secondLevel.imgSrc} alt={secondLevel.imgAlt} />
                           
                                <span className='font-[600]'>{secondLevel.title}</span>
                            </div>
                        </Link>
                    </div>
                })
            }
        </div>
    )
}

export default MegaMenu;