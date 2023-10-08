import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import "./contact.css"

const ContactPage = () => {
    const [message, setMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [file, setFile] = useState(null);
    const [fileUploaded, setFileUploaded] = useState(false);

    const handleFileUpload = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFileUploaded(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (message) {
            // Simulate a successful upload for demonstration purposes
            setTimeout(() => {
                if (fileUploaded) {
                    toast.success("File uploaded successfully!");
                } else {
                    toast.success("Message sent successfully!");
                }
            }, 1000);
        } else {
            toast.error("Please enter a message.");
        }
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="file" className="file-label">
                        <i className="fas fa-upload"></i> Upload File (optional)
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="*"
                        onChange={handleFileUpload}
                        className="file-input"
                        noValidate
                    />
                    {fileUploaded && <span style={{position:"relative", left:'24px'}} className="text-success">File uploaded successfully!</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="option">Select an Option:</label>
                    <select
                        id="option"
                        name="option"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="Offer">Offer</option>
                        <option value="Alert">Alert</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
            <Toaster /> {/* Toaster component for displaying toast messages */}
        </div>
    );
};

export default ContactPage;
