import React from 'react';
import './Cards.scss';
import Card from '../Card/Card';
import Button from '../Button/Button';

const Cards = () => {
  return (
    <div className="cards">
      <Card isFirstCard={true}>
        <Button variant="icon" />
      </Card>
      <Card variant="default">
        <Button variant="icon" />
      </Card>
      <Card variant="default">
        <Button variant="default" />
      </Card>
      <Card variant="default">
        <Button variant="icon" />
      </Card>
      <Card variant="border">
        <Button variant="icon" />
      </Card>
      <Card variant="border">
        <Button variant="icon" disabled/>
      </Card>
      <Card variant="border">
        <Button variant="icon" />
      </Card>
    </div>
  );
};

export default Cards;
