import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  formStyle: {
    background: '',
    border: '1px solid rgba(80, 130, 252, 0.7)',
    borderRadius: 4,
    boxShadow: '0 3px 5px 2px rgba(80, 130, 252, 0.1)',
    color: 'white',
    height: 28,
    padding: '0 50px',
    fontFamily: 'Tenor Sans',
  },
  buttonStyle: {
    border: '1px solid white',
    borderRadius: '4px',
    padding: '0.5rem 2rem 0.5rem 2rem',
    background: 'transparent',
    color: 'white',
  },
})

export default useStyles
