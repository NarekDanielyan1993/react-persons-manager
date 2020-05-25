import React from "react";

const withClasses = (WithClassComponent, className) => {
    return (
      props => {
        return (
            <div className={className}>
              <WithClassComponent {...props}/>
            </div>
        )
      }
    );
};

export default withClasses;