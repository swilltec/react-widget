import React from "react";

export const Accordion = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div className="title active">
              <i className="dropdown icon"></i>
              {item.title}
            </div>
            <div className="content active">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
};
