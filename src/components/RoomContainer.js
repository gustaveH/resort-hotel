import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

export default function RoomsContainer() {
  return (
    <div>
      Hello from rooms container
      <RoomFilter />
      <RoomList />
    </div>
  );
}
