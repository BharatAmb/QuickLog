const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
    companyName: { type: String, required: true, trim: true },
    workspaceName: { type: String, required: true, trim: true },
    owner: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true ,unique: true},
    mobile: { type: String, trim: true },
    state: { type: String, trim: true },
    city: { type: String, trim: true },
    logo: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Workspace', workspaceSchema);