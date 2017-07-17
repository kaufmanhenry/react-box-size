import React from 'react'
import Box from '../src'

const App = () => {
  const styles = {
    root: {
      fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif'
    },
    containerBox: {
      border: 'solid 1px #ddd',
      borderRadius: 4
    },
    code: {
      fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
    }
  }
  return (
    <Box style={styles.root} pv={3} ph={6}>
      <Box mb={2}>
        <h1>react-box-size</h1>
      </Box>
      <p>
        A basic react-wrapper component for sizing a box.
        <br />
        <br />
        Each prop receives an input of a number between <span style={styles.code}>`1`</span> and <span style={styles.code}>`6`</span>.
      </p>
      <Box mv={6}>
        <Box mb={1}>
          <h2>Margins</h2>
        </Box>
        <Box style={styles.containerBox} mv={3}>
          <code style={styles.code}>`mv={3}`</code>
        </Box>
        <Box style={styles.containerBox} mh={3}>
          <code style={styles.code}>`mh={3}`</code>
        </Box>
        <Box style={styles.containerBox} mt={3}>
          <code style={styles.code}>`mt={3}`</code>
        </Box>
        <Box style={styles.containerBox} mb={3}>
          <code style={styles.code}>`mb={3}`</code>
        </Box>
        <Box style={styles.containerBox} ml={3}>
          <code style={styles.code}>`ml={3}`</code>
        </Box>
        <Box style={styles.containerBox} mr={3}>
          <code style={styles.code}>`mr={3}`</code>
        </Box>
      </Box>
      <Box mv={6}>
        <Box mb={1}>
          <h2>Paddings</h2>
        </Box>
        <Box style={styles.containerBox} pv={3}>
          <code style={styles.code}>`pv={3}`</code>
        </Box>
        <Box style={styles.containerBox} ph={3}>
          <code style={styles.code}>`ph={3}`</code>
        </Box>
        <Box style={styles.containerBox} pt={3}>
          <code style={styles.code}>`pt={3}`</code>
        </Box>
        <Box style={styles.containerBox} pb={3}>
          <code style={styles.code}>`pb={3}`</code>
        </Box>
        <Box style={styles.containerBox} pl={3}>
          <code style={styles.code}>`pl={3}`</code>
        </Box>
        <Box style={styles.containerBox} pr={3}>
          <code style={styles.code}>`pr={3}`</code>
        </Box>
      </Box>
    </Box>
  )
}

export default App
