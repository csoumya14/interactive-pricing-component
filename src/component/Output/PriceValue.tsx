import React from 'react';
import { PlanType } from '../../BillingPlan';
import { Price, YearOrMonth } from './PriceValue.css';
import { priceFormater, discount } from '../../helpers/priceFormater';

const PriceValue = ({
  billingFrequency,
  selectedPlan,
}: {
  billingFrequency: string;
  selectedPlan: PlanType;
}) => {
  const discountPercent = discount * 100;
  const priceMultiplier = billingFrequency === 'year' ? 1 - discountPercent : 1;
  const computedPrice = selectedPlan.price * priceMultiplier;
  const formattedPrice = priceFormater(computedPrice);

  return (
    <output htmlFor="plan-select billing-frequency">
      <Price>{formattedPrice}</Price> <YearOrMonth>/month</YearOrMonth>
    </output>
  );
};
export default PriceValue;
