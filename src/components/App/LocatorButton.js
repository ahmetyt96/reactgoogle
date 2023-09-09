import PropTypes from 'prop-types';

const LocatorButton = ({mapObject}) => {
    const getUserLocation = () => { // ADDED
      // To be defined below        // ADDED
    };                              // ADDED
    return (
      <button
        onClick={getUserLocation}   // ADDED
        type="button"
      >
       
      </button>
    );
  };
export default LocatorButton;