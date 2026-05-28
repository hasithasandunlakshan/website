import React, { useState } from 'react';

import { Column, HoverBox } from './ComparisonCommon';

export interface Asyncapi3ParameterComparisonProps {
  className?: string;
}

export interface HoverState {
  location: boolean;
  description: boolean;
  enum: boolean;
  examples: boolean;
  default: boolean;
}

interface ParameterHoverBoxProps {
  label: string;
  fieldKey: keyof HoverState;
}

/**
 * @description React component for comparing AsyncAPI parameters between versions 2.x and 3.0.
 * @param {string} [props.className=''] - Additional CSS classes for styling.
 */
export default function Asyncapi3ParameterComparison({ className = '' }: Asyncapi3ParameterComparisonProps) {
  const [hoverState, setHoverState] = useState<HoverState>({
    location: false,
    description: false,
    enum: false,
    examples: false,
    default: false
  });

  const ParameterHoverBox = ({ label, fieldKey }: ParameterHoverBoxProps) => (
    <HoverBox<HoverState>
      label={label}
      fieldKey={fieldKey}
      hoverState={hoverState}
      setHoverState={setHoverState}
      activeClass='bg-orange-300 dark:bg-orange-900/60'
      borderClass='border-orange-300 dark:border-orange-700'
      className='flex-1'
      useMouseOver
      focusable
    />
  );

  const renderFields = () => (
    <>
      <ParameterHoverBox label='location' fieldKey='location' />
      <ParameterHoverBox label='description' fieldKey='description' />
    </>
  );

  return (
    <div className={`${className} flex flex-col flex-wrap gap-1 text-center md:flex-row`}>
      <Column title='AsyncAPI 2.x'>
        <div className='m-2 border border-yellow-300 p-2 dark:border-yellow-700'>
          components | channels
          <div className='flex flex-1 flex-wrap'>
            <div className='m-2 border border-yellow-600 bg-white p-2 dark:border-yellow-700 dark:bg-gray-900'>
              parameters
              <div className='flex flex-1 flex-wrap'>
                <div className='m-2 border border-yellow-600 bg-white p-2 dark:border-yellow-700 dark:bg-gray-900'>
                  parameter
                  <div className='flex flex-1 flex-wrap'>
                    {renderFields()}
                    <div className='m-2 flex-1 border border-yellow-600 bg-white p-2 dark:border-yellow-700 dark:bg-gray-900'>
                      schema
                      <div className='flex flex-1 flex-wrap'>
                        <div className='m-2 flex-1 bg-white p-2 dark:bg-gray-950'>type</div>
                        <ParameterHoverBox label='enum' fieldKey='enum' />
                        <ParameterHoverBox label='examples' fieldKey='examples' />
                        <ParameterHoverBox label='default' fieldKey='default' />
                        <ParameterHoverBox label='description' fieldKey='description' />
                        <div className='m-2 flex-1 bg-white p-2 dark:bg-gray-950'>pattern</div>
                        <div className='m-2 flex-1 bg-white p-2 dark:bg-gray-950'>multipleOf</div>
                        <div className='m-2 flex-1 bg-white p-2 dark:bg-gray-950'>And all other properties</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Column>

      <Column title='AsyncAPI 3.0'>
        <div className='m-2 border border-yellow-300 p-2 dark:border-yellow-700'>
          components | channels
          <div className='flex flex-1 flex-wrap'>
            <div className='m-2 border border-yellow-600 bg-white p-2 dark:border-yellow-700 dark:bg-gray-900'>
              parameters
              <div className='flex flex-1 flex-wrap'>
                <div className='m-2 border border-yellow-600 bg-white p-2 dark:border-yellow-700 dark:bg-gray-900'>
                  parameter
                  <div className='flex flex-1 flex-wrap'>
                    {renderFields()}
                    <ParameterHoverBox label='enum' fieldKey='enum' />
                    <ParameterHoverBox label='examples' fieldKey='examples' />
                    <ParameterHoverBox label='default' fieldKey='default' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Column>
    </div>
  );
}
