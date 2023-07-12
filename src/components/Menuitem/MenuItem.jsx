import React from 'react';

import {App__menuitem, App__menuitem_head, App__menuitem_price, App__menuitem_dash, App__menuitem_name, App__menuitem_sub} from './style.js';

const MenuItem = ({ title, price, tags }) => (
  <App__menuitem>
     <App__menuitem_head>
        <App__menuitem_name>
             <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        </App__menuitem_name>
        
        <App__menuitem_dash/>

        <App__menuitem_price>
             <p className="p__cormorant">{price}</p>
        </App__menuitem_price>
     </App__menuitem_head>
     <App__menuitem_sub>
             <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
     </App__menuitem_sub>
  </App__menuitem>
);

export default MenuItem;
