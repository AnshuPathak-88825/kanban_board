import React from 'react';

import priorities from '../GroupingObjects/priorities.jsx';
import statuses from '../GroupingObjects/statuses.jsx';

// Functional component for rendering the body of a card
const CardBody = ({ ticket, users, grouping }) => {
    // Find the user object based on the user ID
    const user = users.find((user) => user.id === ticket.userId);

    // Determine the availability status of the user or set to false if not available
    const active = user ? user.available
                        : false;

    // Generate a user icon based on the first character of the user name
    const userIcon = user ? user.name.charAt(0).toUpperCase()
                          : 'N/A';

    // Find the priority and status objects based on ticket data
    const priority = priorities.find(p => p.id === ticket.priority);
    const status = statuses.find(s => s.title === ticket.status);

    return (
        <div className='text-[15px] p-[20px] flex flex-col gap-2 rounded-lg bg-white shadow'>
            {/* Top section with user ID and user icon (if grouping is not 'User') */}
            <div className='flex flex-row items-center justify-between text-[#a6a9ad] bg-white'>
                <div className='bg-white'>
                    {ticket.id}
                </div>
                {grouping !== 'User' && (
                    <div className='bg-trans'>
                        {/* Display an active or inactive indicator based on user availability */}
                        {active ? <div className='active'></div>
                                : <div className='inactive'></div>
                        }
                        {/* Display the user icon (first character of the user name) */}
                        <div className='relative right-0 top=0 flex items-center justify-center w-[25px] h-[25px] text-[14px]'>
                            {userIcon}
                        </div>
                    </div>
                )}
            </div>
            {/* Middle section with status icon and ticket title */}
            <div className='flex gap-2 items-start'>
                {grouping !== 'Status' && (
                    <div>
                        {/* Display the status icon based on ticket data */}
                        {status ? status.icon
                                : null}
                    </div>
                )}
                {/* Display the ticket title */}
                <div className='userTitle'>
                    {ticket.title}
                </div>
            </div>
            {/* Bottom section with priority icon and ticket tags */}
            <div className='flex flex-wrap items-center gap-2 bg-white text-sm'>
                {grouping !== 'Priority' && (
                    <div className='flex items-center justify-center p-0.5 border-2 border-[#dbdbdb] rounded-md'>
                        {/* Display the priority icon based on ticket data */}
                        {priority.icon}
                    </div>
                )}
                {/* Display each tag associated with the ticket */}
                {ticket.tag.map((tag, index) => (
                    <div key={index} className='flex items-center justify-center gap-2 px-1 border-2 border-[#dbdbdb] rounded-md bg-white text-[#a0a3a7]'>
                        <div className='w-3 h-3 rounded-full bg-[#bec2c7]'></div>
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardBody;