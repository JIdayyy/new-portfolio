const Github = (): JSX.Element => (
    <svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path fill="url(#a)" d="M0 0h30v30H0z" />
        <defs>
            <pattern
                id="a"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <use xlinkHref="#b" transform="scale(.01111)" />
            </pattern>
            <image
                id="b"
                width={90}
                height={90}
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
);

export default Github;
