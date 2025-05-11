//////// getvalue ////
export const getValue = (id) => {
    return document.getElementById(id).value;
};

//////// setvalue ////
export const setValue = (id, value) => {
    console.log(id, value);
  
    document.getElementById(id).value = value;
  };