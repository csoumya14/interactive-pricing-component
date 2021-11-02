import React, { useState, ChangeEvent } from 'react';
import billingPlans from '../../data/billingPlanData';

const SliderToggle = () => {
  const middlePlanIndex = Math.floor(billingPlans.length / 2);
  const [selectedPlan, setSelectedPlan] = useState(billingPlans[middlePlanIndex]);
  const numOfOptions = billingPlans.length;

  const inputValue = billingPlans.findIndex(option => option === selectedPlan) + 1; // 1-based index

  const numberSuffixer = (unit: number, suffix: string) => (num: number) =>
    `${Math.floor(num / unit)}${suffix}`;
  const numberFormater = (value: number) => {
    if (value >= 1_000_000) {
      return numberSuffixer(1_000_000, 'm')(value);
    }
    if (value >= 1000) {
      return numberSuffixer(1000, 'k')(value);
    }
    return value.toString();
  };
  const computedPrice = selectedPlan.price;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = parseInt(event.target.value);
    const newSelectedOption = billingPlans[newInputValue - 1]; // convert to zero-based index
    setSelectedPlan(newSelectedOption);
  };
  return (
    <form>
      <output htmlFor="plan-select">{numberFormater(selectedPlan.traffic)}</output>
      <input
        type="range"
        min="1"
        max={numOfOptions}
        id="plan-select"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SliderToggle;
