import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { FaUser } from 'react-icons/fa';
import { FaThList } from 'react-icons/fa';
import { AiOutlineBook } from 'react-icons/ai';

const Navbar = () => {
    const navigate = useNavigate();

    const handleGenresClick = () => {
        navigate("/genres"); 
    };

    const handleFavoritesClick = () => {
        navigate("/favorites"); 
    };

    const handleProfileClick = () =>{
        navigate("/profile");
    }

    return (
        <nav className='px-5 z-50 py-[.8rem] bg:[#e91e63] lg:px-20 flex justify-between'>
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4" onClick={()=>navigate("/")}>
                <ul className="logo font-semibold text-gray-100 text-1xl">Ink&Paper</ul>
            </div>

            <div className="flex items-center space-x-2 ">
                <IconButton onClick={handleGenresClick}> 
                    <FaThList size={20} style={{ color: 'white' }} /> 
                </IconButton>

                <IconButton onClick={handleFavoritesClick}>
                    <AiOutlineBook size={20} style={{ color: 'white' }} /> 
                </IconButton>

                <IconButton onClick={handleProfileClick}> 
                    <FaUser size={20} style={{ color: 'white' }} /> 
                </IconButton>

            </div>
        </nav>
    );
};

export default Navbar;
