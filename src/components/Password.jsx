import React, { useState } from "react";

const Password = () => {
  let [show, setShow] = useState(false);
/*   const handlePassword = () => {
       setShow(!show)
       show ? setShow(false) : setShow(true)
      if(show){
          setShow(false)
      }else{
          setShow(true)
      }
       console.log(show);
  } */

  return (
    <div className="mt-2">
      <input
        type={show ? 'text' : 'password'}
        placeholder="password"
        className="border border-blue-500 p-3 rounded"
      />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
};

export default Password;
