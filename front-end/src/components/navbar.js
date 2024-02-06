import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ClickAwayListener, Grid, Grow, MenuList, Paper, Popper } from '@mui/material';
import logo from './logo.png';
import { Image } from '@mui/icons-material';
import SignInDailog from './SignInDailog';
import { useNavigate } from 'react-router-dom';

const pages = ['Community', 'Games', 'Marketplace'];
const settings = ['Team', 'Whitepaper', 'Support'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(null);
  const [index, setIndex] = React.useState(0);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();
  const [openMenuMobile, setOpenMenuMobile] = React.useState(null);
  const anchorRefMobile = React.useRef(null);
  

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenMenu(false);
  };

  const handleToggleMobile = () => {
    setOpenMenuMobile((prevOpen) => !prevOpen);
  };

  const handleCloseMobile = (event) => {
    if (anchorRefMobile.current && anchorRefMobile.current.contains(event.target)) {
      return;
    }
    setOpenMenuMobile(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    } else if (event.key === 'Escape') {
      setOpenMenu(false);
    }
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="fixed" style={{paddingLeft: '3vw', backgroundColor: 'transparent', boxShadow:'none'}}>
      <Container  style={{ maxWidth: '94vw', margin:'20px 0px 0px', backgroundColor: '#000000',opacity: '0.9', borderRadius: '35px', border:'1px solid #FFFFFF'}}  >
        <Toolbar disableGutters>
          <Box component={'span'} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} onClick={()=>
          {
            window.location.href = "/";
            console.log("move to top");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            
          }}>
            <img src={logo} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: 'block', md: 'none',
                  "& .MuiPaper-root": {
                    backgroundColor: "#000",
                  }
                },
              }}
              >
              <div>
              <Button
                // onClick={handleCloseNavMenu}
                sx={{
                  my: 2, paddingLeft:3, color: 'white', display: 'block', fontFamily: 'Inter',
                }}
                ref={anchorRefMobile}
                id="composition-button"
                aria-controls={openMenu ? 'composition-menu' : undefined}
                aria-expanded={openMenu ? 'true' : undefined}
                aria-haspopup="true"
                      onMouseEnter={handleToggleMobile}
                      onClick={handleToggleMobile}
              >
                About
                  </Button>
                  <Popper
                    open={openMenuMobile}
                    anchorEl={anchorRefMobile.current}
                    role={undefined}
                    placement="bottom"
                    transition
                    disablePortal
                    sx={{ backgroundColor: "#000", zIndex: 1000, }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: 'bottom-start',
              }}
            >
              <Paper sx={{backgroundColor: "#000", zIndex:1000, color: "#fff", width: '100%'}}>
                <ClickAwayListener onClickAway={handleCloseMobile} >
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    sx={{ padding:'12px 14px 12px 18px'}}            
                  >
                                <MenuItem
                                onClick={(event) => {
                                  handleCloseMobile(event)
                                  handleCloseNavMenu(event)
                                  navigate('/team')
                                  
                                  }}
                                  sx={{
                                    paddingBottom: "10px", paddingLeft: '0', fontWeight: 400,
                                fontSize: '11px' }}>Team</MenuItem>
                                <Box sx={{ width: '100%', border: "0.6px solid #FFFFFF"}}></Box>
                                <MenuItem onClick={handleCloseNavMenu} sx={{ paddingBottom: "10px", paddingLeft:'0',fontWeight: 400,
                                fontSize: '11px' }}>Whitepaper</MenuItem>
                                <Box sx={{ width: '100%', border: "0.6px solid #FFFFFF"}}></Box>
                              <MenuItem
                                onClick={(event) => {
                                  handleCloseMobile(event)
                                  handleCloseNavMenu(event)
                                  navigate('/support')
        
                                  }}
                                sx={{
                                  paddingBottom: "10px", paddingLeft: '0', fontWeight: 400,
                                fontSize: '11px' }}>Support</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div> 
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{}} >
                  <Button href={`/#${page}`} textAlign="center" sx={{ color: '#FFF' }} className="nav-btn" >{page}</Button>
                </MenuItem>
              ))}
              <MenuItem  onClick={handleCloseNavMenu}  >
              <Button
                // onClick={handleCloseNavMenu}
                  sx={{ color: '#F9D649', display: 'block', }}
                    className="nav-btn"
                    onClick={() => {
                      setOpen(true)
                      setIndex(0)
                    }} 
              >
                Jump in
                </Button>
              </MenuItem>
              <MenuItem  onClick={handleCloseNavMenu}  >
              <Button
                // onClick={handleCloseNavMenu}
                  sx={{ color: '#F9D649', display: 'block' }}
                    className="nav-btn"
                    onClick={() => {
                      setOpen(true)
                      setIndex(1)
                    }}
              >
               Sign Up
              </Button>
              </MenuItem>
              
            </Menu>
          </Box>
          <Box component={'span'} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          onClick={()=>
            {
              window.location.href = "/";
              console.log("move to top");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              
            }}
          >
          
          <img src={logo}  />
          </Box>
          <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, paddingRight: '5vw' }}>
            <Grid xs={8} >
            <Grid container
              direction="row"
              justifyContent="flex-start"
              alignItems="center" sx={{ paddingLeft: { lg: '5vw' } }}>
                <div>
              <Button
                      sx={{
                        my: 2, px: { md: '1vw', lg: '2vw' }, color: 'white', display: 'block', fontFamily: 'Inter',
                      }}
                ref={anchorRef}
                id="composition-button"
                aria-controls={openMenu ? 'composition-menu' : undefined}
                aria-expanded={openMenu ? 'true' : undefined}
                aria-haspopup="true"
                      onMouseEnter={handleToggle}
                      onClick={handleToggle}
                      className="nav-btn"
              >
                About
                  </Button>
                  <Popper
          open={openMenu}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: 'bottom-start',
              }}
            >
              <Paper sx={{backgroundColor: "#000", color: "#fff",}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    sx={{ padding:'12px 14px 12px 18px'}}            
                  >
                                <MenuItem
                                  onClick={(event) => {
                                    handleClose(event)
                                    navigate('/team')
                                  }}
                                  sx={{
                                    paddingBottom: "10px", paddingLeft: '0', fontWeight: 400,
                                fontSize: '11px' }}>Team</MenuItem>
                                <Box sx={{ width: '100%', border: "0.6px solid #FFFFFF"}}></Box>
                                <MenuItem onClick={handleClose} sx={{ paddingBottom: "10px", paddingLeft:'0',fontWeight: 400,
                                fontSize: '11px' }}>Whitepaper</MenuItem>
                                <Box sx={{ width: '100%', border: "0.6px solid #FFFFFF"}}></Box>
                                <MenuItem
                                onClick={(event) => {
                                  handleClose(event)
                                  navigate('/support')
                                }}
                                  sx={{
                                    paddingBottom: "10px", paddingLeft: '0', fontWeight: 400,
                                fontSize: '11px' }}>Support</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>    
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{
                  my: 2, px: { md: '1vw', lg: '2vw' }, color: 'white', display: 'block', fontFamily: 'Inter',
                }}
                className="nav-btn"
                href={`/#${page}`}
              >
                {page}
              </Button>
            ))}
            </Grid>
            </Grid>
            <Grid xs={'auto'} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center">
              <Button
                // onClick={handleCloseNavMenu}
                  sx={{ color: '#F9D649', display: 'block', }}
                  className="nav-btn"
                    onClick={() => {
                      setOpen(true)
                      setIndex(0)
                    }}  
              >
                Jump in
                </Button>
                <Box sx={{ width: {lg:'20px'}}}></Box>
              <Button
                // onClick={handleCloseNavMenu}
                className="nav-btn"
                    sx={{ color: '#F9D649', display: 'block' }}
                    onClick={() => {
                      setOpen(true)
                      setIndex(1)
                    }}  
              >
               Sign Up
              </Button>
          
              </Grid>
              </Grid>
          </Grid>
        </Toolbar>
      </Container>
      </AppBar>
      <SignInDailog open={open} setOpen={setOpen} index={index} setIndex={setIndex} />
    </>
  );
};
export default ResponsiveAppBar;
