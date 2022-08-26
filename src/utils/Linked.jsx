import {NavLink} from "react-router-dom";
import React from "react";

const Linked = ({className, children, path}) => {
    return (
        <div className="disabled">
            <NavLink
                to={`/${path}`}
                className={({isActive}) => (isActive ? 'active' : undefined)}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default Linked;
