import React, { useState } from 'react';
import billingPlans from '../../data/billingPlanData';
import PriceValue from '../../component/Output/PriceValue';
import PageView from '../../component/Output/PageView';
import Slider from '../../component/Slider/Slider';
import { Wrapper, Form } from './SliderToggle.css';

const SliderToggle = () => {
  const middlePlanIndex = Math.floor(billingPlans.length / 2);
  const [selectedPlan, setSelectedPlan] = useState(billingPlans[middlePlanIndex]);
  const [billingFrequency, setSelectedBillingFrequency] = useState<string>('month');

  return (
    <Wrapper>
      <Form>
        <PageView selectedPlan={selectedPlan} />
        <Slider selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
        <PriceValue selectedPlan={selectedPlan} billingFrequency={billingFrequency} />
      </Form>
    </Wrapper>
  );
};

export default SliderToggle;
