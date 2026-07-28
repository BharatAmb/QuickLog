const Workspace = require('../models/workspace.model');

exports.createWorkspace = async (req, res) => {
    try {
        const { companyName, workspaceName, owner, email } = req.body;
        
        // 1. Check for missing required fields
        if (!companyName || !workspaceName || !owner || !email) {
            return res.status(400).json({ success: false, message: 'Required fields are missing.' });
        }

        // 2. Check if a workspace with this email already exists
        const existingWorkspace = await Workspace.findOne({ email });
        
        if (existingWorkspace) {
            return res.status(409).json({ 
                success: false, 
                message: 'A workspace with this email already exists.' 
            });
        }

        // 3. If no duplicate is found, create the workspace
        const newWorkspace = await Workspace.create(req.body);

        return res.status(201).json({
            success: true,
            message: 'Workspace created successfully!',
            data: newWorkspace
        });
    } catch (error) {
        // 4. Failsafe: Handle MongoDB Duplicate Key Error
        if (error.code === 11000) {
            return res.status(409).json({ 
                success: false, 
                message: 'A workspace with this email already exists.' 
            });
        }
        
        return res.status(500).json({ success: false, error: error.message });
    }
};

// 2. READ ALL Workspaces
exports.getAllWorkspaces = async (req, res) => {
    try {
        const workspaces = await Workspace.find();
        return res.status(200).json({
            success: true,
            count: workspaces.length,
            data: workspaces
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

// 3. READ SINGLE Workspace by ID
exports.getWorkspaceById = async (req, res) => {
    try {
        const workspace = await Workspace.findById(req.params.id);
        if (!workspace) {
            return res.status(404).json({ success: false, message: 'Workspace not found.' });
        }
        return res.status(200).json({ success: true, data: workspace });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

// 4. UPDATE Workspace by ID
exports.updateWorkspace = async (req, res) => {
    try {
        const workspace = await Workspace.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!workspace) {
            return res.status(404).json({ success: false, message: 'Workspace not found.' });
        }

        return res.status(200).json({
            success: true,
            message: 'Workspace updated successfully!',
            data: workspace
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

// 5. DELETE Workspace by ID
exports.deleteWorkspace = async (req, res) => {
    try {
        const workspace = await Workspace.findByIdAndDelete(req.params.id);

        if (!workspace) {
            return res.status(404).json({ success: false, message: 'Workspace not found.' });
        }

        return res.status(200).json({
            success: true,
            message: 'Workspace deleted successfully!',
            data: workspace
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};