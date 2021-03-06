import React from 'react';
import { connect } from 'react-redux';

import Input from '../../components/Input';
import Description from '../../components/Description';
import Title from '../../components/Title';
import Button from '../../components/Button';

import { updateBodyFat } from '../../utils/utils';

function mapStateToProps({calculator}) {
  return {
    bodyfat: calculator.bodyfat,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch(updateBodyFat(e.target.value))
  };
}

const Bodyfat = ({onChange, bodyfat}) => {
  return (
    <div className="mx2 flex justify-between flex-column">
      <div>
        <Title>What is your Bodyfat percentage?</Title>
        <Description>
          This will help us calculate your lean mass and total calorie intake
        </Description>
      </div>

      <div className="mb4">
        <form
        name="calculator"
        className="lato center py2">
            <Input
            name="weight"
            type="number"
            pattern="[0-9]*"
            unit='%'
            defaultValue={bodyfat}
            onChange={onChange}
            />
        </form>
      </div>

      <Button path="training"/>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Bodyfat);
