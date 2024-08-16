// src/components/ModuleColumn.js
import React from 'react';
import { FaGraduationCap, FaBook, FaUtensils, FaBed, FaHeartbeat, FaAward, FaExclamationCircle, FaBriefcase, FaBuilding, FaDumbbell, FaHome } from 'react-icons/fa';
import './ModuleColumn.css'; // Custom CSS for the layout and styling

const ModuleColumn = () => {
    return (
        <div className="module-container">
            <div className="module-block">
                <h3 className="text-center mb-4">Module</h3>
                <div className="module-grid">
                    <div className="module-card">
                        <FaGraduationCap className="icon" /> Academics
                    </div>
                    <div className="module-card">
                        <FaBook className="icon" /> Programme and Curriculum
                    </div>
                    <div className="module-card">
                        <FaUtensils className="icon" /> Mess Management
                    </div>
                    <div className="module-card">
                        <FaBed className="icon" /> Visitor's Hostel
                    </div>
                    <div className="module-card">
                        <FaHeartbeat className="icon" /> Healthcare Center
                    </div>
                    <div className="module-card">
                        <FaAward className="icon" /> Scholarship Portal
                    </div>
                    <div className="module-card">
                        <FaExclamationCircle className="icon" /> Complaint System
                    </div>
                    <div className="module-card">
                        <FaBriefcase className="icon" /> Placement Cell
                    </div>
                    <div className="module-card">
                        <FaBuilding className="icon" /> Department Portal
                    </div>
                    <div className="module-card">
                        <FaDumbbell className="icon" /> Gymkhana
                    </div>
                    <div className="module-card">
                        <FaHome className="icon" /> Hostel Management
                    </div>
                    <div className="module-card">
                        <FaBook className="icon" /> Other Academic Procedure
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModuleColumn;
