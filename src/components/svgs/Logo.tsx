const LogoSvg = (): JSX.Element => (
    <svg width={46} height={46} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
            cx={23}
            cy={23}
            r={22.08}
            fill="#D9D9D9"
            stroke="#E5E4E5"
            strokeWidth={1.84}
        />
        <path
            stroke="#989898"
            strokeWidth={1.38}
            strokeLinecap="round"
            d="M23.23 14.95v19.32"
        />
        <circle cx={23.23} cy={14.03} r={4.83} fill="#F0A63F" />
    </svg>
);

export default LogoSvg;
