import React from "react";
import FilterButton from "./FilterButton";

export default function FilterWrapper({ filters, onSetFilterNotes, currentFilter }) {
    return (
        <div className="filter-wrapper">
            {filters.map((filter) => (
                <FilterButton
                    key={filter.value}
                    {...filter}
                    currentFilter={currentFilter}
                    onSetFilterNotes={onSetFilterNotes}
                    style={{ background: filter.color }}
                >
                    {filter.text}
                </FilterButton>
            ))}
        </div>
    );
}
