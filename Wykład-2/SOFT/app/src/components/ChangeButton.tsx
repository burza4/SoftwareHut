import React from 'react';
interface ButtonProps {
    Change: () => void;
}

const ChangeButton:React.FC<ButtonProps> = ({Change,children}) => {
    return (
      <div>
          <button onClick ={Change}>{children}</button>
      </div>
    );
  };

  export default ChangeButton;