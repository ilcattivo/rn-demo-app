// TODO: restrict usage styled.Image

import {FC} from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

interface IImage extends FastImageProps {}

export const Image: FC<IImage> = props => <FastImage {...props} />;
