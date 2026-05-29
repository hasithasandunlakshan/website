import React, { useState } from 'react';

import { Column, ComparisonBox, ComponentsGridList, HoverBox } from './ComparisonCommon';

interface HoverState {
  Info: boolean;
  Servers: boolean;
  Paths: boolean;
  PathItem: boolean;
  Summary: boolean;
  Operations: boolean;
  OperationItem: boolean;
  OperationType: boolean;
  Message: boolean;
  Tags: boolean;
  External: boolean;
  Components: boolean;
}

interface OpenAPIComparisonV3Props {
  className?: string;
}

/** Component entries shown inside the OpenAPI 3.0 Components section (V3 comparison). */
const OPENAPI_V3_COMPONENT_NAMES = [
  'Definitions',
  'Responses',
  'Parameters',
  'Response Headers',
  'Security Definitions',
  'Callbacks',
  'Links'
];

/** Component entries shown inside the AsyncAPI 3.0 Components section. */
const ASYNCAPI_V3_COMPONENT_NAMES = [
  'Schemas',
  'Messages',
  'Security Schemes',
  'Parameters',
  'Correlation Ids',
  'Operation Traits',
  'Message Traits',
  'Server Bindings',
  'Channel Bindings',
  'Operation Bindings',
  'Message Bindings'
];

/**
 * @description OpenAPIComparisonV3 component displays a comparison between OpenAPI 3.0 and AsyncAPI 3.0 specifications.
 * @param {string} [props.className=''] - Additional CSS classes for styling.
 */
export default function OpenAPIComparisonV3({ className = '' }: OpenAPIComparisonV3Props) {
  const [hoverState, setHoverState] = useState<HoverState>({
    Info: false,
    Servers: false,
    Paths: false,
    PathItem: true,
    Summary: false,
    Operations: false,
    OperationItem: true,
    OperationType: false,
    Message: false,
    Tags: false,
    External: false,
    Components: false
  });

  return (
    <div className={`${className} flex flex-col flex-wrap gap-1 text-center md:flex-row`}>
      <Column title='OpenAPI 3.0'>
        <HoverBox<HoverState>
          label='Info'
          fieldKey='Info'
          hoverState={hoverState}
          setHoverState={setHoverState}
          activeClass='bg-blue-100 dark:bg-blue-900/40'
          defaultClass=' '
          borderClass='border-blue-300 dark:border-blue-700'
          useMouseOver
        />
        <div className='flex flex-1 flex-wrap'>
          <HoverBox<HoverState>
            label='Servers'
            fieldKey='Servers'
            hoverState={hoverState}
            setHoverState={setHoverState}
            activeClass='bg-green-100 dark:bg-green-900/40'
            defaultClass=' '
            borderClass='border-green-300 dark:border-green-700'
            className='flex-1'
            useMouseOver
          />
          <ComparisonBox className='flex-1 hover:bg-gray-200 dark:hover:bg-gray-800'>Security</ComparisonBox>
        </div>
        <HoverBox<HoverState>
          label='Paths'
          fieldKey='Paths'
          hoverState={hoverState}
          setHoverState={setHoverState}
          activeClass='bg-yellow-100 dark:bg-yellow-900/40'
          defaultClass=' '
          borderClass='border-yellow-300 dark:border-yellow-700'
        >
          <div className='flex flex-1 flex-wrap'>
            <HoverBox<HoverState>
              label='Path Item'
              fieldKey='PathItem'
              hoverState={hoverState}
              setHoverState={setHoverState}
              activeClass='bg-yellow-300 dark:bg-yellow-800/60'
              borderClass='border-yellow-600 dark:border-yellow-700'
            >
              <div className='flex flex-1 flex-col flex-wrap'>
                <HoverBox<HoverState>
                  label='Summary and description'
                  fieldKey='Summary'
                  hoverState={hoverState}
                  setHoverState={setHoverState}
                  activeClass='bg-blue-200 dark:bg-blue-900/50'
                  borderClass='border-blue-500 dark:border-blue-400'
                />
                <div className='flex flex-1 flex-wrap'>
                  <HoverBox<HoverState>
                    label='Operation'
                    fieldKey='OperationItem'
                    hoverState={hoverState}
                    setHoverState={setHoverState}
                    activeClass='bg-orange-300 dark:bg-orange-800/60'
                    borderClass='border-orange-300 dark:border-orange-700'
                    className='flex-1'
                  >
                    <HoverBox<HoverState>
                      label='GET, PUT, POST, etc.'
                      fieldKey='OperationType'
                      hoverState={hoverState}
                      setHoverState={setHoverState}
                      activeClass='bg-orange-400 dark:bg-orange-900/70'
                      borderClass='border-orange-300 dark:border-orange-700'
                      className='flex-1'
                    />
                    <HoverBox<HoverState>
                      label='Request'
                      fieldKey='Message'
                      hoverState={hoverState}
                      setHoverState={setHoverState}
                      activeClass='bg-red-400 dark:bg-red-900/60'
                      borderClass='border-red-600 dark:border-red-700'
                      className='flex-1'
                    />
                    <HoverBox<HoverState>
                      label='Responses'
                      fieldKey='Message'
                      hoverState={hoverState}
                      setHoverState={setHoverState}
                      activeClass='bg-red-400 dark:bg-red-900/60'
                      borderClass='border-red-600 dark:border-red-700'
                      className='flex-1'
                    />
                  </HoverBox>
                </div>
              </div>
            </HoverBox>
          </div>
        </HoverBox>
        <div className='flex flex-1 flex-wrap'>
          <HoverBox<HoverState>
            label='Tags'
            fieldKey='Tags'
            hoverState={hoverState}
            setHoverState={setHoverState}
            activeClass='bg-pink-300 dark:bg-pink-900/60'
            defaultClass=' '
            borderClass='border-black dark:border-gray-600'
            className='flex flex-1 items-center justify-center'
            useMouseOver
          />
          <HoverBox<HoverState>
            label='External Docs'
            fieldKey='External'
            hoverState={hoverState}
            setHoverState={setHoverState}
            activeClass='bg-green-500 dark:bg-green-900/60'
            defaultClass=' '
            borderClass='border-black dark:border-gray-600'
            className='flex flex-1 items-center justify-center'
            useMouseOver
          />
        </div>
        <HoverBox<HoverState>
          label='Components'
          fieldKey='Components'
          hoverState={hoverState}
          setHoverState={setHoverState}
          activeClass='bg-gray-100 dark:bg-gray-800'
          defaultClass=' '
          borderClass='border-black dark:border-gray-600'
          className='flex-1'
          useMouseOver
        >
          <ComponentsGridList items={OPENAPI_V3_COMPONENT_NAMES} />
        </HoverBox>
      </Column>

      <Column title='AsyncAPI 3.0'>
        <HoverBox<HoverState>
          label='Info'
          fieldKey='Info'
          hoverState={hoverState}
          setHoverState={setHoverState}
          activeClass='bg-blue-100 dark:bg-blue-900/40'
          defaultClass=' '
          borderClass='border-blue-300 dark:border-blue-700'
          useMouseOver
        />
        <div className='flex flex-1 flex-wrap'>
          <HoverBox<HoverState>
            label='Servers (hosts + security)'
            fieldKey='Servers'
            hoverState={hoverState}
            setHoverState={setHoverState}
            activeClass='bg-green-100 dark:bg-green-900/40'
            defaultClass=' '
            borderClass='border-green-300 dark:border-green-700'
            className='flex-1'
            useMouseOver
          />
        </div>
        <HoverBox<HoverState>
          label='Channels'
          fieldKey='Paths'
          hoverState={hoverState}
          setHoverState={setHoverState}
          activeClass='bg-yellow-100 dark:bg-yellow-900/40'
          defaultClass=' '
          borderClass='border-yellow-300 dark:border-yellow-700'
        >
          <div className='flex flex-1 flex-wrap'>
            <HoverBox<HoverState>
              label='Channel'
              fieldKey='PathItem'
              hoverState={hoverState}
              setHoverState={setHoverState}
              activeClass='bg-yellow-300 dark:bg-yellow-800/60'
              borderClass='border-yellow-600 dark:border-yellow-700'
              useMouseOver
            >
              <div className='flex flex-1 flex-wrap'>
                <div className='flex flex-1 flex-wrap'>
                  <HoverBox<HoverState>
                    label='Summary, description'
                    fieldKey='Summary'
                    hoverState={hoverState}
                    setHoverState={setHoverState}
                    activeClass='bg-blue-200 dark:bg-blue-900/50'
                    borderClass='border-blue-500 dark:border-blue-400'
                    useMouseOver
                  />
                  <div className='flex flex-1 flex-wrap'>
                    <HoverBox<HoverState>
                      label='Messages'
                      fieldKey='Message'
                      hoverState={hoverState}
                      setHoverState={setHoverState}
                      activeClass='bg-red-400 dark:bg-red-900/60'
                      borderClass='border-red-600 dark:border-red-700'
                      className='flex-1'
                    >
                      <ComparisonBox className='box-border flex-1'>Headers</ComparisonBox>
                      <ComparisonBox className='box-border flex-1'>Payload</ComparisonBox>
                    </HoverBox>
                  </div>
                </div>
              </div>
            </HoverBox>
          </div>
        </HoverBox>
        <HoverBox<HoverState>
          label='Operations'
          fieldKey='Operations'
          hoverState={hoverState}
          setHoverState={setHoverState}
          activeClass='bg-orange-200 dark:bg-orange-900/50'
          borderClass='border-orange-300 dark:border-orange-700'
          className='flex-1'
          useMouseOver
        >
          <div className='flex flex-1 flex-wrap'>
            <HoverBox<HoverState>
              label='Operation'
              fieldKey='OperationItem'
              hoverState={hoverState}
              setHoverState={setHoverState}
              activeClass='bg-orange-300 dark:bg-orange-800/60'
              borderClass='border-orange-300 dark:border-orange-700'
              className='flex-1'
              useMouseOver
            >
              <div className='flex flex-1 flex-col flex-wrap'>
                <HoverBox<HoverState>
                  label='action (send or receive)'
                  fieldKey='OperationType'
                  hoverState={hoverState}
                  setHoverState={setHoverState}
                  activeClass='bg-orange-400 dark:bg-orange-900/70'
                  borderClass='border-orange-300 dark:border-orange-700'
                  className='flex-1'
                  useMouseOver
                />
                <HoverBox<HoverState>
                  label='Channel reference'
                  fieldKey='PathItem'
                  hoverState={hoverState}
                  setHoverState={setHoverState}
                  activeClass='bg-yellow-300 dark:bg-yellow-800/60'
                  borderClass='border-yellow-600 dark:border-yellow-700'
                />
                <HoverBox<HoverState>
                  label='Messages reference'
                  fieldKey='Message'
                  hoverState={hoverState}
                  setHoverState={setHoverState}
                  activeClass='bg-red-400 dark:bg-red-900/60'
                  borderClass='border-red-600 dark:border-red-700'
                  className='flex-1'
                />
              </div>
            </HoverBox>
          </div>
        </HoverBox>
        <div className='flex flex-1 flex-wrap'>
          <ComparisonBox className='box-border flex-1 hover:bg-blue-400 dark:hover:bg-blue-900/50'>
            Id (application identifier)
          </ComparisonBox>
        </div>
        <div className='flex flex-1 flex-wrap'>
          <HoverBox<HoverState>
            label='Tags'
            fieldKey='Tags'
            hoverState={hoverState}
            setHoverState={setHoverState}
            activeClass='bg-pink-300 dark:bg-pink-900/60'
            defaultClass=' '
            borderClass='border-black dark:border-gray-600'
            className='flex flex-1 items-center justify-center'
            useMouseOver
          />
          <HoverBox<HoverState>
            label='External Docs'
            fieldKey='External'
            hoverState={hoverState}
            setHoverState={setHoverState}
            activeClass='bg-green-500 dark:bg-green-900/60'
            defaultClass=' '
            borderClass='border-black dark:border-gray-600'
            className='flex flex-1 items-center justify-center'
            useMouseOver
          />
        </div>
        <HoverBox<HoverState>
          label='Components'
          fieldKey='Components'
          hoverState={hoverState}
          setHoverState={setHoverState}
          activeClass='bg-gray-100 dark:bg-gray-800'
          defaultClass=' '
          borderClass='border-black dark:border-gray-600'
          className='flex-1'
          useMouseOver
        >
          <ComponentsGridList items={ASYNCAPI_V3_COMPONENT_NAMES} />
        </HoverBox>
      </Column>
    </div>
  );
}
