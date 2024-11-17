import React, { useState } from "react";
import "./SwitchTabs.css";

const SwitchTabs = ({ data, onTabChange }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tab, index) => {
        setActiveTab(index);
        onTabChange(tab);   
    };

    return (
        <div className="switchTabs">
            {data.map((tab, index) => (
                <h2 key={index} className={`tabButton ${activeTab === index ? "active" : ""}`}
                    onClick={() => handleTabClick(tab, index)}
                >
                    {tab}
                </h2>
            ))}
        </div>
    );
};

export default SwitchTabs;
