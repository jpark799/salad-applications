import { Slider } from '@saladtechnologies/garden-components'
import classnames from 'classnames'
import { FunctionComponent } from 'react'
import withStyles, { WithStyles } from 'react-jss'
import { SaladTheme } from '../../../SaladTheme'

const styles = (theme: SaladTheme) => ({
  errorMessageContainer: {
    color: theme.red,
  },
  mb12: {
    marginBottom: 12,
  },
  SaladCardDepositModalContainer: {
    height: 250,
  },
  centerAlign: {
    display: 'flex',
    justifyContent: 'center',
  },
})

interface SaladCardDepositModalProps extends WithStyles<typeof styles> {
  onChange: (value: number) => void
}

const _SaladCardDepositModal: FunctionComponent<SaladCardDepositModalProps> = ({ classes, onChange }) => {
  return (
    <div>
      <div className={classes.mb12}>
        <div className={classnames(classes.SaladCardDepositModalContainer, classes.centerAlign)}>
          <Slider
            onChange={(value: number) => {
              onChange(value)
            }}
            value={5}
            minimum={5}
            maximum={20}
            stepSize={5}
          />
        </div>
      </div>
    </div>
  )
}

export const SaladCardDepositModal = withStyles(styles)(_SaladCardDepositModal)
