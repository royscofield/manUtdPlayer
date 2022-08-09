import classNames from "classnames/bind";
import styles from './TabContent.css'
import { useState } from "react";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Men from "../TabInfo/Men/Men";
import Women from "../TabInfo/Women/Women";
import Under23s from "../TabInfo/Under-23s/Under23s";
import Under18s from "../TabInfo/Under-18s/Under18s";
import Legend from "../TabInfo/Legend/Legend";

const cx = classNames.bind(styles)

function TabContent({ props })
{
    
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <div className={cx('wrapper')}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList 
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        centered
                    >
                        <Tab label="Men" value="1" />
                        <Tab label="Women" value="2" />
                        <Tab label="Under-23s" value="3" />
                        <Tab label="Under-18s" value="4" />
                        <Tab label="Legend" value="5" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Men /></TabPanel>
                <TabPanel value="2"><Women /></TabPanel>
                <TabPanel value="3"><Under23s /></TabPanel>
                <TabPanel value="4"><Under18s /></TabPanel>
                <TabPanel value="5"><Legend /></TabPanel>
            </TabContext>
            </Box>
        </div>       
    )
}

export default TabContent



