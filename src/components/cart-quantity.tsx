import React, {Dispatch, SetStateAction} from 'react';
import styled from '@emotion/native';

import {Typography} from './typography';

//
//

export interface ICartQuantity {
  quantity: number;
  update: Dispatch<SetStateAction<number>>;
}

export const CartQuantity: React.FC<ICartQuantity> = ({quantity, update}) => {
  return (
    <QuantityContainer>
      <React.Fragment>
        <QuantityButton
          onPress={() => update(prev => prev + 1)}
          underlayColor="#EDEBF2">
          <Typography color="#522973">+</Typography>
        </QuantityButton>

        <Typography style={{textAlign: 'center', flex: 1}}>
          {quantity}
        </Typography>

        <QuantityButton
          onPress={() => update(prev => (prev > 1 ? prev - 1 : prev))}
          underlayColor="#EDEBF2">
          <Typography color="#522973">-</Typography>
        </QuantityButton>
      </React.Fragment>
    </QuantityContainer>
  );
};

//
//

const QuantityButton = styled.TouchableHighlight({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  width: 40,
  height: 40,
});

const QuantityContainer = styled.TouchableHighlight({
  borderWidth: 1,
  borderColor: '#EDEBF2',
  marginRight: 10,
  flex: 4,
  paddingVertical: 0,
  paddingHorizontal: 5,
  borderRadius: 1000,
  maxHeight: 51,
  alignItems: 'center',
  flexDirection: 'row',
});
