import React, { useState } from 'react';

const DownloadableReportButton = () => {
    const [data, setData] = useState([]);

    const mockData = [
        { format: 'PDF', url: '/reports/report1.pdf' },
        { format: 'CSV', url: '/reports/report1.csv' },
        { format: 'Excel', url: '/reports/report1.xlsx' }
    ];

    const handleDownload = (format) => {
        const report = mockData.find(item => item.format === format);
        if (report) {
            // Simulate downloading report
            window.open(report.url, '_blank');
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <h2 className="text-lg font-semibold">Download Reports</h2>
            <div className="flex space-x-4">
                {mockData.map((report) => (
                    <button
                        key={report.format}
                        className="btn btn-primary"
                        onClick={() => handleDownload(report.format)}
                    >
                        Download as {report.format}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DownloadableReportButton;