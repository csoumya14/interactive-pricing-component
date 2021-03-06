import React from 'react';
import { PlanType } from '../../BillingPlan';
import { Price, YearOrMonth, OutputElement } from './PriceValue.css';
import { priceFormater, discount } from '../../helpers/priceFormater';

const PriceValue = ({
  billingFrequency,
  selectedPlan,
}: {
  billingFrequency: string;
  selectedPlan: PlanType;
}) => {
  const priceMultiplier = billingFrequency === 'annually' ? 1 - discount : 1;
  const computedPrice = selectedPlan.price * priceMultiplier;
  const formattedPrice = priceFormater(computedPrice);

  return (
    <OutputElement htmlFor="plan-select billing-frequency">
      <Price>{formattedPrice}</Price> <YearOrMonth>/month</YearOrMonth>
    </OutputElement>
  );
};
export default PriceValue;
