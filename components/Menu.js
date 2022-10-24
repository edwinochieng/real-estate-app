import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {BsSearch} from 'react-icons/bs'
import {FcHome,FcMenu,FcAbout} from 'react-icons/fc'
import {FiKey} from 'react-icons/fi'
import { fontSize } from '@mui/system';
import Link from 'next/link';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FcMenu size={24}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href='/'>
        <MenuItem onClick={handleClose} sx = {{fontSize : 16, fontFamily : 'Poppins', pr:7}}><span className="mr-3" ><FcHome/></span>Home</MenuItem>
        </Link>
        <Link href='/search'>
        <MenuItem onClick={handleClose} sx = {{fontSize : 16, fontFamily : 'Poppins', pr:7}}><span className="mr-3"><BsSearch/></span>Search</MenuItem>   
        </Link>
        <Link href='/search?purpose=for-sale'>
        <MenuItem onClick={handleClose} sx = {{fontSize : 16, fontFamily : 'Poppins', pr:7}}><span className="mr-3"><FcAbout/></span>Buy Property</MenuItem>
        </Link>
        <Link href='/search?purpose=for-rent'>
        <MenuItem onClick={handleClose} sx = {{fontSize : 16, fontFamily : 'Poppins', pr:7}}><span className="mr-3"><FiKey/></span>Rent Property</MenuItem>
        </Link>
        
      </Menu>
    </div>
  );
}
