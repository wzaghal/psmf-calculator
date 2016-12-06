import React from 'react';

const DEFAULT_CLASSES = '';

const Scale = ({className = DEFAULT_CLASSES}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <circle cx="256" cy="256" r="256" fill="#FFC61B"/>
        <path d="M510.62 282.68L377.328 149.353 277.96 315.018l-48.573-49.43-94.11 126.08 120.327 120.326c.133 0 .264.005.396.005 132.374 0 241.276-100.473 254.62-229.32z" fill="#EAA22F"/>
        <path d="M151.87 398.222h208.26c13.422 0 24.3-10.88 24.3-24.3v-207.4c0-13.42-10.88-24.3-24.3-24.3H151.87c-13.422 0-24.3 10.88-24.3 24.3v207.4c0 13.42 10.88 24.3 24.3 24.3z" fill="#273B7A"/>
        <path d="M360.13 142.222H255.427v256H360.13c13.422 0 24.3-10.88 24.3-24.3v-207.4c0-13.42-10.88-24.3-24.3-24.3z" fill="#121149"/>
        <path d="M304.13 224.67c-31.396-9.39-64.864-9.39-96.26 0-4.973 1.49-10.236-1.213-11.992-6.096l-12.63-35.08c-1.91-5.305 1.04-11.086 6.424-12.75 43.21-13.34 89.448-13.34 132.658 0 5.385 1.665 8.333 7.445 6.423 12.75l-12.63 35.08c-1.758 4.882-7.02 7.585-11.993 6.097z" fill="#71E2EF"/>
        <path d="M322.33 170.744c-21.79-6.728-44.35-10.054-66.904-9.995v56.888c16.408-.057 32.82 2.282 48.704 7.034 4.973 1.488 10.235-1.214 11.993-6.097l12.63-35.08c1.91-5.307-1.037-11.087-6.424-12.75z" fill="#38C6D9"/>
        <path d="M232.153 369.778H166.07c-5.316 0-9.625-4.31-9.625-9.625v-94.527c0-5.317 4.31-9.625 9.626-9.625h66.083c5.317 0 9.625 4.31 9.625 9.626v94.527c0 5.315-4.31 9.625-9.625 9.625z" fill="#386895"/>
        <path d="M345.93 369.778h-66.08c-5.318 0-9.626-4.31-9.626-9.625v-94.527c0-5.317 4.31-9.625 9.625-9.625h66.08c5.318 0 9.626 4.31 9.626 9.626v94.527c0 5.315-4.31 9.625-9.625 9.625z" fill="#273B7A"/>
        <path d="M229.56 219.746l-19.948-39.893c-.636-1.276-2.19-1.79-3.47-1.157-1.277.64-1.795 2.19-1.157 3.47l19.256 38.51c1.77-.338 3.543-.645 5.32-.93z" fill="#121149"/>
      </svg>
    </div>
  );
}

Scale.defaultName = 'Scale';

export default Scale;