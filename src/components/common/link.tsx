import { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from 'next/router';
import clsx from 'clsx'

const CustomLink: React.ForwardRefRenderFunction<
    HTMLAnchorElement,
    CustomLinkProps
> = (props, ref) => {
    const router = useRouter();

    const { href, as, prefetch, passHref, replace, scroll, shallow,
        activeClassName, className, ...rest } = props;

    const cls = clsx(className, {
        [activeClassName ?? 'active']: router.asPath === href || router.asPath === as
    })

    return (
        <Link {...{ href, as, prefetch, passHref, replace, scroll, shallow }}>
            <a ref={ref} {...rest} className={cls}>{props.children}</a>
        </Link>
    );
};

export default forwardRef(CustomLink);

export interface CustomLinkProps extends React.HTMLAttributes<HTMLAnchorElement>, LinkProps {
    activeClassName?: string
}
