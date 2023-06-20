import { style } from "@vanilla-extract/css"

export const taskArticle = style({
    color: '#374151'
})

export const taskTitle = style({
    textDecoration: 'none',
    color: '#111',
    fontSize: '24px'
})

export const taskHeader = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '4px',
    lineHeight: '24px'
})

export const taskFooter = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    lineHeight:'24px',
    fontSize: '12px'
})

export const taskButton = style({
    cursor: 'pointer',
    color: '#f43f5e',
    textDecoration: 'none',
    ':hover': {
        textDecoration: 'underline'
    }
})