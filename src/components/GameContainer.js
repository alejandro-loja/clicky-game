import React from "react";

const styles =  {
    paddingTop: '50px',
    background: '#ECEFF1',
    height: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    padding: '20px',
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    overflow: 'auto'
  }

function GameContainer(props) {
return <div style={styles} className="wrapper">{props.children}</div>;
}


export default GameContainer;