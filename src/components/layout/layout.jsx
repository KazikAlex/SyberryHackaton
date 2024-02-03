import React, { forwardRef } from 'react';

function Header() {
    return null;
}

function Footer() {
    return null;
}

export const Layout = forwardRef((props, ref) => {
    const { children, className, ...rest } = props;

    return (
        <div ref={ref} {...rest}>
            <Header />
            <div className={'main'}>{children}</div>
            <Footer />
        </div>
    );
});