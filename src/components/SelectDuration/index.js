import React from 'react';
import styled from 'styled-components';

const SelectDurationBox = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    flex-basis: calc(33.333% - 10px - 40px);
    padding: 30px 20px;
  }
`;

const SelectItem = styled.div`
  background: #fafafa;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  text-transform: uppercase;
  text-align: center;
  color: #9ea1a7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s;
  .date{
    font-size: 24px;
    margin: 0 0 5px 0;
  }
  &:hover {
    background: #f1e9e9;
  }
  ${({active}) => active && `
     border-color: #df5d34;
     background: #fff;
     color:#373c46;
  `}
`;

export function DurationItem({item, onSelectDuration, duration}) {
  return (
    <SelectItem active={duration === item.id} onClick={() => onSelectDuration(item.id)}>
      <div>
        {item.number && <div className="date">{item.number}</div>}
        <div>
          {item.title}
        </div>
      </div>
    </SelectItem>
  )
}

export default function SelectDuration({duration, onSelectDuration}) {
  const options = [
    {
      id: '4week',
      number: '4',
      title: 'Weeks'
    },
    {
      id: '6week',
      number: '6',
      title: 'Weeks'
    },
    {
      id: 'custom',
      title: 'Custom'
    },
  ];
  return (
    <SelectDurationBox>
      {options.map(i => <DurationItem key={i.id} item={i} onSelectDuration={onSelectDuration} duration={duration}/>)}
    </SelectDurationBox>
  )
}