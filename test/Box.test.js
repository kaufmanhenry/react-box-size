import test from 'ava'
import React from 'react'
import ReactTestRenderer from 'react-test-renderer'

import Box from '../src'

// Margin testing
test('Box with vertical margin', (t) => {
  const basicBox = ReactTestRenderer.create(<Box mv={3} />)
  const json = basicBox.toJSON()
  t.is(json.props.style.marginTop, 24)
  t.is(json.props.style.marginBottom, 24)
})

test('Box with horizontal margin', (t) => {
  const basicBox = ReactTestRenderer.create(<Box mh={3} />)
  const json = basicBox.toJSON()
  t.is(json.props.style.marginLeft, 24)
  t.is(json.props.style.marginRight, 24)
})

test('Box with top margin', (t) => {
  const basicBox = ReactTestRenderer.create(<Box mt={3} />)
  const json = basicBox.toJSON()
  t.is(json.props.style.marginTop, 24)
})

test('Box with bottom margin', (t) => {
  const basicBox = ReactTestRenderer.create(<Box mb={3} />)
  const json = basicBox.toJSON()
  t.is(json.props.style.marginBottom, 24)
})

test('Box with left margin', (t) => {
  const basicBox = ReactTestRenderer.create(<Box ml={3} />)
  const json = basicBox.toJSON()
  t.is(json.props.style.marginLeft, 24)
})

test('Box with right margin', (t) => {
  const basicBox = ReactTestRenderer.create(<Box mr={3} />)
  const json = basicBox.toJSON()
  t.is(json.props.style.marginRight, 24)
})

// Padding testing
test('Box with vertical padding', (t) => {
  const basicBox = ReactTestRenderer.create(<Box pv={3} />)
  const json = basicBox.toJSON()
  t.is(json.props.style.paddingTop, 24)
  t.is(json.props.style.paddingBottom, 24)
})

test('Box with horizontal padding', (t) => {
  const basicBox = ReactTestRenderer.create(<Box ph={3} />)
  const json = basicBox.toJSON()
  t.is(json.props.style.paddingLeft, 24)
  t.is(json.props.style.paddingRight, 24)
})

test('Box with top padding', (t) => {
  const basicBox = ReactTestRenderer.create(<Box pt={3} />)
  const json = basicBox.toJSON()
  t.is(json.props.style.paddingTop, 24)
})

test('Box with bottom padding', (t) => {
  const basicBox = ReactTestRenderer.create(<Box pb={3} />)
  const json = basicBox.toJSON()
  t.is(json.props.style.paddingBottom, 24)
})

test('Box with left padding', (t) => {
  const basicBox = ReactTestRenderer.create(<Box pl={3} />)
  const json = basicBox.toJSON()
  t.is(json.props.style.paddingLeft, 24)
})

test('Box with right padding', (t) => {
  const basicBox = ReactTestRenderer.create(<Box pr={3} />)
  const json = basicBox.toJSON()
  t.is(json.props.style.paddingRight, 24)
})
