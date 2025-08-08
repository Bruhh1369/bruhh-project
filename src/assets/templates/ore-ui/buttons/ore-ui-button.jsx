import React from 'react'
import clsx from 'clsx'
import './ore-ui-button.scss'

/*
<a class="ore-button-neutral">
    <div class="button-text">
        <p>button</p>
    </div>
</a>*/


export const DarkButton = ({ tagName: Tag = "a", secondClass, buttonTextClass = "button-text", thirdClass, childElement, hyperLink, buttonType, ...rest }) => {

    return (
        <Tag className={clsx("ore-button-dark", secondClass, thirdClass)} href={hyperLink} type={buttonType} {...rest}>
            <div className={buttonTextClass}>
                {childElement || <p>button-text</p>}
            </div>
        </Tag>
    )
}

export const GreenButton = ({ tagName: Tag = "a", secondClass, buttonTextClass = "button-text", thirdClass, childElement, hyperLink, buttonType, ...rest }) => {

    return (
        <Tag className={clsx("ore-button", secondClass, thirdClass)} href={hyperLink} type={buttonType} {...rest}>
            <div className={buttonTextClass}>
                {childElement || <p>button-text</p>}
            </div>
        </Tag>
    )
}