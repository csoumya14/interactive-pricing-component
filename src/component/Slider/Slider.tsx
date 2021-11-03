import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { PlanType } from '../../BillingPlan';
import billingPlans from '../../data/billingPlanData';
import { Input, Div } from './Slider.css';

const Slider = ({
  selectedPlan,
  setSelectedPlan,
}: {
  selectedPlan: PlanType;
  setSelectedPlan: Dispatch<SetStateAction<PlanType>>;
}) => {
  const inputValue = billingPlans.findIndex(option => option === selectedPlan) + 1; // 1-based index

  const numOfOptions = billingPlans.length;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = parseInt(event.target.value);
    const newSelectedOption = billingPlans[newInputValue - 1]; // convert to zero-based index
    setSelectedPlan(newSelectedOption);
  };
  return (
    <Div>
      <Input
        type="range"
        min="1"
        max={numOfOptions}
        id="plan-select"
        value={inputValue}
        onChange={handleInputChange}
      />
    </Div>
  );
};

export default Slider;
