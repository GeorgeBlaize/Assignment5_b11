 // Button Functionality for Completing Tasks
 document.addEventListener('DOMContentLoaded', () => {
    const buttons = {
        'shopEaseBtn': 'Shop Ease',
        'cloudSynceBtn': 'Cloud Synce',
        'swiftPayBtn': 'Swiftpay',
        'metaBtn': 'Meta',
        'googleBtn': 'Google LLC',
        'glassDoarBtn': 'Glassdoar'
    };

    const activityLog = document.getElementById('activityLog');
    const taskAssigned = document.getElementById('taskAssigned');
    const taskCount = document.getElementById('taskCount');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    const discoverLink = document.getElementById('discoverLink');

    let assignedTasks = parseInt(taskAssigned.textContent, 10);
    let completedTasks = parseInt(taskCount.textContent, 10);





    Object.entries(buttons).forEach(([buttonId, projectName]) => {
        const button = document.getElementById(buttonId);
        button.addEventListener('click', () => {
            const confirmed = confirm(`Mark ${projectName} as completed?`);
            if (confirmed) {
                const time = new Date().toLocaleTimeString();
                const logEntry = document.createElement('li');
                logEntry.textContent = `You have completed the task for ${projectName} at ${time}`;
                activityLog.insertBefore(logEntry, activityLog.firstChild); // Add at the top
                alert('Board updated Successfully');

                // Disable the button after clicking
                button.disabled = true;
                button.classList.add('bg-gray-400', 'cursor-not-allowed', 'hover:bg-gray-400'); // Visually indicate it's disabled

                
                if (assignedTasks > 0) {
                    assignedTasks--;
                    taskAssigned.textContent = assignedTasks.toString().padStart(2, '0'); // Keep it as "06", "05", etc.
                }

               
                completedTasks++;
                taskCount.textContent = completedTasks;

                
                if (assignedTasks === 0) {
                    alert('Congrats!!! You have completed all the current tasks');
                }
            }
        });
    });


    // Clear History Button Functionality
    clearHistoryBtn.addEventListener('click', () => {
        const confirmed = confirm('Are you sure you want to clear the activity log?');
        if (confirmed) {
            activityLog.innerHTML = ''; 
            alert('Activity log cleared successfully');
        }
    });
});