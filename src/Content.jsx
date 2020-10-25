import React from 'react';

import Slider from './Slider';
import InfoBlock from './InfoBlock';

function Content() {
    return (
        <div className="root">
            <div><Slider /></div>
            <div><InfoBlock text="Sometext" /></div>
        </div>
    );
}

export default Content;