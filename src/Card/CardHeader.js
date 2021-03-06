// @flow
// @inheritedComponent CardContent

import React from 'react';
import type { Node } from 'react';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';
import CardContent from './CardContent';

export const styles = (theme: Object) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    flex: '0 0 auto',
    marginRight: theme.spacing.unit * 2,
  },
  action: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: theme.spacing.unit * -1,
    marginRight: theme.spacing.unit * -2,
  },
  content: {
    flex: '1 1 auto',
  },
  title: {},
  subheader: {},
});

type ProvidedProps = {
  classes: Object,
};

export type Props = {
  /**
   * The action to display in the card header.
   */
  action?: Node,
  /**
   * The Avatar for the Card Header.
   */
  avatar?: Node,
  /**
   * Useful to extend the style applied to components.
   */
  classes?: Object,
  /**
   * @ignore
   */
  className?: string,
  /**
   * The content of the component.
   */
  subheader?: Node,
  /**
   * The content of the Card Title.
   */
  title?: Node,
};

function CardHeader(props: ProvidedProps & Props) {
  const { avatar, action, classes, className: classNameProp, subheader, title, ...other } = props;

  // Adjustments that depend on the presence of an avatar
  const titleType = avatar ? 'body2' : 'headline';
  const subheaderType = avatar ? 'body2' : 'body1';

  return (
    <CardContent className={classNames(classes.root, classNameProp)} {...other}>
      {avatar && <div className={classes.avatar}>{avatar}</div>}
      <div className={classes.content}>
        <Typography type={titleType} component="span" className={classes.title}>
          {title}
        </Typography>
        <Typography
          type={subheaderType}
          component="span"
          color="secondary"
          className={classes.subheader}
        >
          {subheader}
        </Typography>
      </div>
      {action && <div className={classes.action}>{action}</div>}
    </CardContent>
  );
}

export default withStyles(styles, { name: 'MuiCardHeader' })(CardHeader);
