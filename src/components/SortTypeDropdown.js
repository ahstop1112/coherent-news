import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SortTypeDropdown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const {changeSortType, sortType} = props;

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Sort By: <span>{sortType}</span>
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => changeSortType('publishedAt')}>Published At</DropdownItem>
        <DropdownItem onClick={() => changeSortType('relevancy')}>Relevancy</DropdownItem>
        <DropdownItem onClick={() => changeSortType('popularity')}>Popularity</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SortTypeDropdown;