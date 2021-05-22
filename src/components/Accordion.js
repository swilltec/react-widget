import React, { useState } from "react";

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (idx) => {
    setActiveIndex(idx);
  };
  return (
    <div className="ui styled accordion">
      {items.map((item) => {
        const active = item.id === activeIndex ? "active" : "";
        return (
          <div key={item.id}>
            <div
              className={`title ${active}`}
              onClick={() => onTitleClick(item.id)}
            >
              <i className="dropdown icon"></i>
              {item.title}
            </div>
            <div className={`content ${active}`}>{item.content}</div>
          </div>
        );
      })}
      <p>{activeIndex}</p>
    </div>
  );
};
