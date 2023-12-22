"use client";
import React, { useState, useEffect } from "react";
import statuses from "../GroupingObjects/statuses.jsx";
import CardHead from "../Card/cardHead.jsx";
import CardBody from "../Card/cardBody.jsx";

const groupByStatus = ({ data, grouping, ordering }) => {
  const [groupedTickets, setGroupedTickets] = useState({});
  // Effect to group tickets by status when data changes
  useEffect(() => {
    // Check if data is available
    if (data) {
      // Grouping tickets based on status
      const groupedData = data.tickets.reduce((acc, ticket) => {
        const status = ticket.status;
        if (!acc[status]) {
          acc[status] = [];
        }
        acc[status].push(ticket);
        return acc;
      }, {});

      // Updating state with grouped data
      setGroupedTickets(groupedData);
    }
  }, [data]);
  return (
    <div>
      {/* Check if there are grouped tickets to display */}
      {/* Rendering grouped tickets based on status */}
      {groupedTickets && Object.keys(groupedTickets).length > 0 ? (
        <div className="flex overflow-x-scroll gap-[50px] px-[20px]  h-auto">
          {statuses.map((status) => (
            <div key={status.title} className=" min-w-[400px] max-w-[400px]">
              {/* CardHead component for displaying status information */}
              <CardHead
                title={status.title}
                number={groupedTickets[status.title]?.length || 0}
                icon={status.icon}
                users={data.users}
              />
              <div className="w-full flex flex-col gap-6">
                {/* Conditional rendering based on ordering type */}
                {/* Rendering tickets based on status, sorted by priority in decreasing order */}
                {ordering === "Priority" &&
                  (groupedTickets[status.title] ? (
                    groupedTickets[status.title]
                      .sort((a, b) => b.priority - a.priority) // Sort by priority in decreasing order
                      .map((ticket) => (
                        <CardBody
                          key={ticket.id}
                          ticket={ticket}
                          users={data.users}
                          grouping={grouping}
                        />
                      ))
                  ) : (
                    <></> // Placeholder for empty case
                  ))}

                {/* Rendering tickets based on status, sorted by title in increasing order */}
                {ordering === "Title" &&
                  (groupedTickets[status.title] ? (
                    groupedTickets[status.title]
                      .sort((a, b) => a.title.localeCompare(b.title)) // Sort by title in increasing order
                      .map((ticket) => (
                        <CardBody
                          key={ticket.id}
                          ticket={ticket}
                          users={data.users}
                          grouping={grouping}
                        />
                      ))
                  ) : (
                    <></> // Placeholder for empty case
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></> // Displayed while data is being loaded
      )}
    </div>
  );
};

export default groupByStatus;
