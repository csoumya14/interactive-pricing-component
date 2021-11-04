import React, { Dispatch, SetStateAction } from 'react';
import {
  RadioSwitch,
  RadioSwitchInner,
  Input,
  RadioSwitchLabel,
  VisuallyHiddenLegend,
} from './ToggleSwitch.css';

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
  return (
    <RadioSwitch>
      <VisuallyHiddenLegend>Payment frequency</VisuallyHiddenLegend>
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
        <RadioSwitchLabel htmlFor="annually">Annually</RadioSwitchLabel>
      </RadioSwitchInner>
    </RadioSwitch>
  );
};

export default ToggleSwitch;
