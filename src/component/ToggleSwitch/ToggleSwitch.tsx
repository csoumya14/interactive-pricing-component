import React, { Dispatch, SetStateAction } from 'react';
import {
  RadioSwitch,
  RadioSwitchInner,
  Input,
  RadioSwitchLabel,
  VisuallyHiddenLegend,
  DiscountSpan,
} from './ToggleSwitch.css';
import { useViewPort } from '../../helpers/customViewPort';
const ToggleSwitch = ({
  billingFrequency,
  setSelectedBillingFrequency,
}: {
  billingFrequency: string;
  setSelectedBillingFrequency: Dispatch<SetStateAction<string>>;
}) => {
  const handleToggleChange = (value: string) => {
    setSelectedBillingFrequency(value);
  };

  const [width] = useViewPort();
  const breakPoint = 768;
  return (
    <RadioSwitch>
      <VisuallyHiddenLegend>Billing frequency</VisuallyHiddenLegend>
      <RadioSwitchInner>
        <Input
          type="radio"
          name="pay-type"
          id="monthly"
          value="monthly"
          checked={billingFrequency === 'monthly'}
          onChange={event => handleToggleChange(event.target.value)}
        />
        <RadioSwitchLabel htmlFor="monthly">Monthly</RadioSwitchLabel>
        <Input
          type="radio"
          name="pay-type"
          id="annually"
          value="annually"
          checked={billingFrequency === 'annually'}
          onChange={event => handleToggleChange(event.target.value)}
        />
        {width > breakPoint ? (
          <RadioSwitchLabel htmlFor="annually">
            Annually
            <DiscountSpan>25% discount</DiscountSpan>
          </RadioSwitchLabel>
        ) : (
          <RadioSwitchLabel htmlFor="annually">
            Annually
            <DiscountSpan>25%</DiscountSpan>
          </RadioSwitchLabel>
        )}
      </RadioSwitchInner>
    </RadioSwitch>
  );
};

export default ToggleSwitch;
