import React from 'react'
import Link from './Link'

export const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Accordion
            </Link>
            <Link href="/search" className="item">
               Search
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/translate" className="item">
                Transalate
            </Link>
        </div>
    )
}
