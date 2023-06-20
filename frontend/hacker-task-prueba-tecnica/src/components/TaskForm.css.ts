import { style } from "@vanilla-extract/css"

export const input = style({
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
    outline:'2px solid transparent',
    outlineOffset: '2px',
    paddingTop: '1.5rem',
    paddingLeft: '1rem',
    fontWeight: '300',
    padding: '1rem',
    borderWidth: '2px',
    borderRadius: '0.375rem',
    width: '300px',
    height: '100px'
})

export const form = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center'
})

export const button = style({
    paddingTop: '1.5rem',
    paddingLeft: '1rem',
    fontWeight: '300',
    padding: '1rem',
    borderRadius: '0.375rem',
    width: '100px',
    backgroundColor: '#f43f5e',
    color: 'white'
})

