import React, { useState } from 'react';

import { Column, HoverBox } from './ComparisonCommon';

interface HoverState {
  Info: boolean;
  Servers: boolean;
  Paths: boolean;
  PathItem: boolean;
  Summary: boolean;
  Operation: boolean;
  Message: boolean;
  Tags: boolean;
  External: boolean;
  Components: boolean;
}

interface OpenAPIComparisonProps {
  className?: string;
}

const StaticBox = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`m-2 border border-black p-2 dark:border-gray-600 ${className}`}>{children}</div>
);

const ComponentGrid = ({ children }: { children: React.ReactNode }) => (
  <div className='grid-gap-2 mt-2 grid flex-1 grid-cols-2 flex-wrap'>{children}</div>
);

const ComponentItem = ({ children }: { children: React.ReactNode }) => (
  <div className='m-2 box-border border border-black bg-gray-100 p-2 dark:border-gray-600 dark:bg-gray-800'>
    {children}
  </div>
);

/**
 * @description React component for comparing OpenAPI 3.0 and AsyncAPI 2.0.
 * @param {string} [props.className=''] - Additional CSS classes for styling.
 */
export default function OpenAPIComparison({ className = '' }: OpenAPIComparisonProps) {
  const [hoverState, setHoverState] = useState<HoverState>({
    Info: false,
    Servers: false,
    Paths: false,
    PathItem: true,
    Summary: false,
    Operation: false,
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
          testId='OpenAPI-sec-info'
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
            testId='OpenAPI-sec-servers'
            useMouseOver
          />
          <StaticBox className='flex-1 hover:bg-gray-200 dark:hover:bg-gray-800'>Security</StaticBox>
        </div>
        <HoverBox<HoverState>
          label='Paths'
          fieldKey='Paths'
          hoverState={hoverState}
          setHoverState={setHoverState}
          activeClass='bg-yellow-100 dark:bg-yellow-900/40'
          defaultClass=' '
          borderClass='border-yellow-300 dark:border-yellow-700'
          testId='OpenAPI-paths'
        >
          <div className='flex flex-1 flex-wrap'>
            <HoverBox<HoverState>
              label='Path Item'
              fieldKey='PathItem'
              hoverState={hoverState}
              setHoverState={setHoverState}
              activeClass='bg-yellow-300 dark:bg-yellow-800/60'
              borderClass='border-yellow-600 dark:border-yellow-700'
              testId='OpenAPI-path-item'
            >
              <div className='flex flex-1 flex-col flex-wrap'>
                <HoverBox<HoverState>
                  label='Summary and description'
                  fieldKey='Summary'
                  hoverState={hoverState}
                  setHoverState={setHoverState}
                  activeClass='bg-blue-200 dark:bg-blue-900/50'
                  borderClass='border-blue-500 dark:border-blue-400'
                  testId='OpenAPI-summary'
                />
                <div className='flex flex-1 flex-wrap'>
                  <HoverBox<HoverState>
                    label='Operation (GET, PUT, POST, etc.)'
                    fieldKey='Operation'
                    hoverState={hoverState}
                    setHoverState={setHoverState}
                    activeClass='bg-orange-100 dark:bg-orange-900/40'
                    borderClass='border-orange-300 dark:border-orange-700'
                    className='flex-1'
                    testId='OpenAPI-operation'
                  >
                    <div className='flex flex-1 flex-wrap'>
                      <HoverBox<HoverState>
                        label='Request'
                        fieldKey='Message'
                        hoverState={hoverState}
                        setHoverState={setHoverState}
                        activeClass='bg-red-400 dark:bg-red-900/60'
                        borderClass='border-red-600 dark:border-red-700'
                        className='flex-1'
                        testId='OpenAPI-request'
                      />
                      <HoverBox<HoverState>
                        label='Responses'
                        fieldKey='Message'
                        hoverState={hoverState}
                        setHoverState={setHoverState}
                        activeClass='bg-red-400 dark:bg-red-900/60'
                        borderClass='border-red-600 dark:border-red-700'
                        className='flex-1'
                        testId='OpenAPI-responses'
                      />
                    </div>
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
            testId='OpenAPI-tags'
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
            testId='OpenAPI-external'
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
          testId='OpenAPI-components'
          useMouseOver
        >
          <ComponentGrid>
            <ComponentItem>Schemas</ComponentItem>
            <ComponentItem>Responses</ComponentItem>
            <ComponentItem>Parameters</ComponentItem>
            <ComponentItem>Examples</ComponentItem>
            <ComponentItem>Request Bodies</ComponentItem>
            <ComponentItem>Headers</ComponentItem>
            <ComponentItem>Security Schemes</ComponentItem>
            <ComponentItem>Links</ComponentItem>
            <ComponentItem>Callbacks</ComponentItem>
          </ComponentGrid>
        </HoverBox>
      </Column>

      <Column title='AsyncAPI 2.0'>
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
          label='Channel'
          fieldKey='Paths'
          hoverState={hoverState}
          setHoverState={setHoverState}
          activeClass='bg-yellow-100 dark:bg-yellow-900/40'
          defaultClass=' '
          borderClass='border-yellow-300 dark:border-yellow-700'
        >
          <div className='flex flex-1 flex-wrap'>
            <HoverBox<HoverState>
              label='Channel Item'
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
                    label='Operation (Publish and Subscribe)'
                    fieldKey='Operation'
                    hoverState={hoverState}
                    setHoverState={setHoverState}
                    activeClass='bg-orange-100 dark:bg-orange-900/40'
                    borderClass='border-orange-300 dark:border-orange-700'
                    className='flex-1'
                    useMouseOver
                  >
                    <div className='flex flex-1 flex-col flex-wrap'>
                      <HoverBox<HoverState>
                        label='Summary, description, tags, etc.'
                        fieldKey='Summary'
                        hoverState={hoverState}
                        setHoverState={setHoverState}
                        activeClass='bg-blue-200 dark:bg-blue-900/50'
                        borderClass='border-blue-500 dark:border-blue-400'
                        useMouseOver
                      />
                      <div className='flex flex-1 flex-wrap'>
                        <HoverBox<HoverState>
                          label='Message'
                          fieldKey='Message'
                          hoverState={hoverState}
                          setHoverState={setHoverState}
                          activeClass='bg-red-400 dark:bg-red-900/60'
                          borderClass='border-red-600 dark:border-red-700'
                          className='flex-1'
                        >
                          <StaticBox className='box-border flex-1'>Headers</StaticBox>
                          <StaticBox className='box-border flex-1'>Payload</StaticBox>
                        </HoverBox>
                      </div>
                    </div>
                  </HoverBox>
                </div>
              </div>
            </HoverBox>
          </div>
        </HoverBox>
        <div className='flex flex-1 flex-wrap'>
          <StaticBox className='box-border flex-1 hover:bg-blue-400 dark:hover:bg-blue-900/50'>
            Id (application identifier)
          </StaticBox>
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
          <ComponentGrid>
            <ComponentItem>Schemas</ComponentItem>
            <ComponentItem>Messages</ComponentItem>
            <ComponentItem>Security Schemes</ComponentItem>
            <ComponentItem>Parameters</ComponentItem>
            <ComponentItem>Correlation Ids</ComponentItem>
            <ComponentItem>Operation Traits</ComponentItem>
            <ComponentItem>Message Traits</ComponentItem>
            <ComponentItem>Server Bindings</ComponentItem>
            <ComponentItem>Channel Bindings</ComponentItem>
            <ComponentItem>Operation Bindings</ComponentItem>
            <ComponentItem>Message Bindings</ComponentItem>
          </ComponentGrid>
        </HoverBox>
      </Column>
    </div>
  );
}
