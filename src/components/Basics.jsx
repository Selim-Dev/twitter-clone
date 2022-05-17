import { Button, styled, Typography } from '@mui/material';
import { Add, Settings } from '@mui/icons-material';
const Basics = () => {
  const BlueButton = styled(Button)({
    backgroundColor: 'skyblue',
    color: '#888',
    m: 5,
    '&:hover': {
      backgroundColor: 'lightblue',
    },
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'white',
    },
  });
  return (
    <>
      {/* We can import icons immediately from mui icons without using the Icon instead addIcon => Add */}
      {/* to add icon to the button we use the start icon */}
      {/* we can change the size of the button to be large,small,medium from size attribute */}
      <Button
        startIcon={<Settings />}
        color="secondary"
        size="small"
        variant="contained"
      >
        Settings
      </Button>
      <Button
        color="success"
        size="small"
        variant="contained"
        startIcon={<Add />}
      >
        Add New Post
      </Button>
      {/* typography variant is just styling for html element */}
      {/* to take the style of an element for ex h1 but the actual element is p i need to add component="p" attribute */}
      <Typography variant="h6" component="p">
        It use H1 Style but it's p tag
      </Typography>
      {/* To change the button color we use sx (SX IS USED TO CHOOSE FROM THE THEME PROVIDER PROPERTIES OR WRITE YOUR OWN PROPERTIES)  */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'skyblue',
          color: '#888',
          m: 5,
          '&:hover': {
            backgroundColor: 'lightblue',
          },
          '&:disabled': {
            backgroundColor: 'gray',
            color: 'white',
          },
        }}
      >
        SX Button
      </Button>
      <BlueButton>Hello</BlueButton>
    </>
  );
};

export default Basics;
