import React, { useState } from 'react';

export interface HoverState {
  Paths: boolean;
  PathItem: boolean;
}

export interface AsyncAPI3IdAndAddressComparisonProps {
  className?: string;
}

/**
 * @description Component for comparing AsyncAPI versions based on ID and address.
 * @param {string} [props.className=''] - Additional CSS classes for styling.
 */
export default function Asyncapi3IdAndAddressComparison({ className = '' }: AsyncAPI3IdAndAddressComparisonProps) {
  const [hoverState, setHoverState] = useState<HoverState>({
    Paths: false,
    PathItem: false
  });

  const handleMouseEnter = (key: keyof HoverState) => {
    setHoverState((prevState) => ({ ...prevState, [key]: true }));
  };

  const handleMouseLeave = (key: keyof HoverState) => {
    setHoverState((prevState) => ({ ...prevState, [key]: false }));
  };

  return (
    <div className={`${className} flex flex-col flex-wrap gap-1 text-center md:flex-row`}>
      <div className='ml-1 flex-1 border border-black p-2 dark:border-gray-600 dark:text-gray-100'>
        <h3 className='mb-4 ml-2 font-sans text-lg font-medium'>AsyncAPI 2.x</h3>
        <div>
          <div
            className={`${hoverState.Paths ? 'bg-yellow-100 dark:bg-yellow-900/40' : ' '} m-2 border border-yellow-300 p-2 dark:border-yellow-700`}
            onMouseEnter={() => handleMouseEnter('Paths')}
            onMouseLeave={() => handleMouseLeave('Paths')}
          >
            Channels
            <div
              className={`${hoverState.PathItem ? 'bg-yellow-300 dark:bg-yellow-800/60' : 'bg-white dark:bg-gray-900'} m-2 border border-yellow-600 p-2 dark:border-yellow-700`}
              onMouseOver={() => handleMouseEnter('PathItem')}
              onMouseLeave={() => handleMouseLeave('PathItem')}
            >
              Channel Item
            </div>
          </div>
        </div>
      </div>
      <div className='ml-1 flex-1 border border-black p-2 dark:border-gray-600 dark:text-gray-100'>
        <h3 className='mb-4 ml-2 font-sans text-lg font-medium'>AsyncAPI 3.0</h3>
        <div>
          <div
            className={`${hoverState.Paths ? 'bg-yellow-100 dark:bg-yellow-900/40' : ' '} m-2 border border-yellow-300 p-2 dark:border-yellow-700`}
            onMouseEnter={() => handleMouseEnter('Paths')}
            onMouseLeave={() => handleMouseLeave('Paths')}
          >
            Channels
            <div
              className={`${hoverState.PathItem ? 'bg-yellow-300 dark:bg-yellow-800/60' : 'bg-white dark:bg-gray-900'} m-2 border border-yellow-600 p-2 dark:border-yellow-700`}
              onMouseOver={() => handleMouseEnter('PathItem')}
              onMouseLeave={() => handleMouseLeave('PathItem')}
            >
              Channel
              <div className='flex flex-1 flex-col flex-wrap'>
                <div className='m-2 border border-blue-500 bg-white p-2 hover:bg-blue-200 dark:border-blue-400 dark:bg-gray-900 dark:hover:bg-blue-900/50'>
                  address
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
