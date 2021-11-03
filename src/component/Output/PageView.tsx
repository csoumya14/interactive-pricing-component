import React from 'react';
import { PlanType } from '../../BillingPlan';
import { Output } from './PageView.css';
import { numberFormater } from '../../helpers/numberFormater';

const PageView = ({ selectedPlan }: { selectedPlan: PlanType }) => {
  return (
    <Output htmlFor="plan-select">
      <span>{numberFormater(selectedPlan.traffic)}</span> <span>PageViews</span>
    </Output>
  );
};
export default PageView;
