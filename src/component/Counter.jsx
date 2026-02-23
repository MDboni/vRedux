import { useState } from "react";
import Count from "./Count";
import Button from "./Button";

export default function Counter({onDecrement, onIncrement, counter}) {


  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <div className='text-2xl font-bold'>
        <Count count={counter.value}/>
      </div>
      <div className='space-x-4'>
        <Button handler={() => onIncrement(counter.id)} type="increment">
          Increment
        </Button>
        <Button handler={() => onDecrement(counter.id)} type="decrement">
          Decrement
        </Button>
      </div>
    </div>
  );
}