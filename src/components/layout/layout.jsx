import React, { forwardRef } from 'react';
import Header from '../Header/Header';
import Footer from '../footer/footer';



export const Layout = forwardRef((props, ref) => {
    const { children, className, ...rest } = props;

    return (
        <div ref={ref} {...rest}>
            <Header/>
            <div className={'main'}>{children}</div>
            <Footer />
        </div>
    );
});