import React from 'react';

import {App__menuitem, App__menuitem_head, App__menuitem_sub} from './style.js';

const MenuItem = ({ title, price, tags }) => (
  <App__menuitem>
     <App__menuitem_head>
        <div className="app__menuitem-name">
             <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        </div>
        
        <div className="app__menuitem-dash" />

        <div className="app__menuitem-price">
             <p className="p__cormorant">{price}</p>
        </div>
     </App__menuitem_head>
     <App__menuitem_sub>
             <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
     </App__menuitem_sub>
  </App__menuitem>
);

export default MenuItem;
