import styled from 'styled-components'

export const DialogStyles = styled.div`
position: sticky;
top: 60px;
z-index: 2000;
left: 0;
right: 0;
margin: auto;
dialog {
  
    text-align: center;
    background-color: #333;
    color: #333;
    border: none;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.5);
    width: 500px;
    margin: auto;
   
    max-width: 80%;
  }
  
  dialog[open] {
    animation: toggle-modal .3s ease-in-out;
  }
  
  dialog::backdrop {
    background: rgba(0, 0, 0, .5);
  }
  
  dialog h2 {
    margin: 0 0 30px;
    color: #eee;
  }
  
  input,
  button {
    padding: 8px 20px;
    margin-bottom: 5px;
    margin: 0 10px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
  }
  
  button {
    color: #fff;
    background: #04b95b;
  }
  
  .close-modal {
    background: #c70000;
  }
  
  .open-modal {
    margin-bottom: 40px;
  }
  
  @keyframes toggle-modal {
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
    }
  }
  `