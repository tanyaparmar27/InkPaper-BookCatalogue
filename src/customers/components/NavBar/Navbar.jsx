import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { FaUser } from 'react-icons/fa';
import { FaThList } from 'react-icons/fa';
import { AiOutlineBook } from 'react-icons/ai';

const Navbar = () => {
    const navigate = useNavigate();
    const [myLibraryMenuAnchor, setMyLibraryMenuAnchor] = useState(false);

    const handleGenresClick = () => {
        navigate("/genres"); 
    };

    const handleMyLibraryClick = (event) => {
        setMyLibraryMenuAnchor(event.currentTarget);
    };

    const handleMyLibraryClose = () => {
        setMyLibraryMenuAnchor(false);
    };

    const handleCurrentlyReadingClick = () => {
        navigate("/currentlyreading");
        handleMyLibraryClose();
    };

    const handleAlreadyReadClick = () => {
        navigate("/alreadyread");
        handleMyLibraryClose();
    };

    const handleWantToReadClick = () => {
        navigate("/wanttoread");
        handleMyLibraryClose();
    };

    const handleProfileClick = () =>{
        navigate("/profile");
    }

    return (
        <>
        
        <nav className='px-5 z-50 py-[.8rem] bg-red-950 lg:px-20 flex justify-between'>
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4" onClick={()=>navigate("/")}>
                <ul className="logo font-semibold text-gray-100 text-1xl">Ink&Paper</ul>
            </div>

            <div className="flex items-center space-x-2">
                <IconButton onClick={handleGenresClick}> 
                    <FaThList size={20} style={{ color: 'white' }} /> 
                </IconButton>

                <IconButton onClick={handleMyLibraryClick}>
                    <AiOutlineBook size={20} style={{ color: 'white' }} /> 
                </IconButton>

                <IconButton onClick={handleProfileClick}> 
                    <FaUser size={20} style={{ color: 'white' }} /> 
                </IconButton>

                <Menu
                    anchorEl={myLibraryMenuAnchor}
                    open={Boolean(myLibraryMenuAnchor)}
                    onClick={handleMyLibraryClose}>
                    <MenuItem onClick={handleCurrentlyReadingClick}>
                        Currently Reading
                    </MenuItem>
                    <MenuItem onClick={handleAlreadyReadClick}>
                        Already Read
                    </MenuItem>
                    <MenuItem onClick={handleWantToReadClick}>
                        Want to Read
                    </MenuItem>
                </Menu>
            </div>
        </nav>
        </>

    );
};

export default Navbar;
