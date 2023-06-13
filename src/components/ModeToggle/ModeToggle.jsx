import React, { useContext } from 'react';
import './ModeToggle.scss';
import { ModeContext } from '../../context/ModeContext';

const ModeToggle = () => {

    const { theme, modeToggle } = useContext(ModeContext);

    return (
        <div className="modeToggleBox">
            <div className="toggleDiv">
                <span className={`spanLight ${theme === 'dark' ? 'span-Light' : 'span-Dark'}`} onClick={modeToggle} ></span>
            </div>
        </div>
    )
}

export default ModeToggle