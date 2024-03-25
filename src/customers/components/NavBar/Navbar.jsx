import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { FaUser } from 'react-icons/fa';
import { FaThList } from 'react-icons/fa';
import { AiOutlineBook } from 'react-icons/ai';

const Navbar = () => {
    const navigate = useNavigate();
    const [statusMenuAnchor, setStatusMenuAnchor] = useState(null);

    

    const handleGenresClick = () => {
        navigate("/genres"); 
    };

    const handleProfileClick = ()=>{
        navigate("/profile")
    }

     // Function to navigate to status page based on selected status
    const handleStatusSelect = (status) => {
        navigate(`/${status}`);
        handleStatusMenuClose(); // Close the status menu
    };

    // Function to handle status menu click
    const handleMyLibraryClick = (event) => {
        setStatusMenuAnchor(event.currentTarget);
    };


    // Function to handle status menu close
    const handleStatusMenuClose = () => {
        setStatusMenuAnchor(null);
    };

    

    

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
                    anchorEl={statusMenuAnchor}
                    open={Boolean(statusMenuAnchor)}
                    onClose={handleStatusMenuClose}
                >
                    <MenuItem onClick={() => handleStatusSelect('currently_reading')}>
                        Currently Reading
                    </MenuItem>
                    <MenuItem onClick={() => handleStatusSelect('already_read')}>
                        Already Read
                    </MenuItem>
                    <MenuItem onClick={() => handleStatusSelect('want_to_read')}>
                        Want to Read
                    </MenuItem>
                </Menu>
            </div>
        </nav>
        </>
    );
};

export default Navbar;