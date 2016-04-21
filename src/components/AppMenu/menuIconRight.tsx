import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export function menuIconRight() {
  return (
    <IconButton>
      <MoreVertIcon />
    </IconButton>
  );
}