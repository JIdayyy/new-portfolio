const Instagram = (): JSX.Element => (
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

export default Instagram;
