import React, {ReactNode} from 'react';
import styled from '@emotion/native';

import {Typography} from './typography';

//
//

export const DetailsLine: React.FC<{
  label?: React.ReactNode;
  children: ReactNode;
}> = ({label, children}) => {
  return (
    <DetailsLineContainer>
      <Typography
        fontSize={14}
        style={{marginRight: 16}}
        weight="medium"
        color="#545454">
        {label}
      </Typography>

      <DetailsLineContent>{children}</DetailsLineContent>
    </DetailsLineContainer>
  );
};

//
//

const DetailsLineContainer = styled.View({
  marginVertical: 5,
  flexDirection: 'row',
});

const DetailsLineContent = styled(Typography)({
  flex: 1,
  textAlign: 'right',
});

DetailsLineContent.defaultProps = {
  fontSize: 14,
};
