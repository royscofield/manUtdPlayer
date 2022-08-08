import classNames from "classnames/bind";
import styles from './TabContent.css'
import { useState } from "react";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Men from "../TabInfo/Men/Men";

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
                <TabPanel value="2">women</TabPanel>
                <TabPanel value="3">under-23s</TabPanel>
                <TabPanel value="4">under-18s</TabPanel>
                <TabPanel value="5">legend</TabPanel>
                  </TabContext>
                </Box>
        </div>       
    )
}

export default TabContent



