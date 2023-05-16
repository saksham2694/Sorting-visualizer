import { Menu, Dropdown } from "antd";
import {DownOutlined} from '@ant-design/icons';
import React from "react";

const DropDown = ({ 
    algorithms, 
    currAlgo, 
    setFunc
}) => {
    const menu = (
        <Menu style={{width: 150}}>
        {algorithms.map(function (algo, idx) {
            return (
                <Menu.Item key={idx} onClick={() => setFunc(algo)}>
                    {algo}
                </Menu.Item>
            );
        })}
        </Menu>);
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <div
                style={{
                    height: 20,
                    width: 110,
                    padding: 10,
                    fontWeight: 'bold',
                    background: '#3fb950',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    borderRadius: '10px',
                }}>{currAlgo} <DownOutlined />
            </div>
        </Dropdown>
    )
};

export default DropDown;