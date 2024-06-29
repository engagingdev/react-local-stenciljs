import { useEffect, useRef } from 'react';

/**
 * Custom hook to enable complex properties on FLUID components.
 *
 * https://github.com/lmigtech/fluid/tree/develop/common/tools/react/UseCustomElementRef.ts
 */
export function useCustomElementRef(customEvents: any = {}, props: any = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const refCurrent = ref.current as any;

    if (refCurrent) {
      // Set props on web component element
      Object.keys(props).forEach(
        (propKey) => (refCurrent![propKey] = props[propKey])
      );

      // Set custom event listeners on web component element
      Object.keys(customEvents).forEach((eventKey) => {
        refCurrent!.addEventListener(eventKey, customEvents[eventKey]);
      });

      return function cleanup() {
        // remove custom event listeners on web component unmount
        Object.keys(customEvents).forEach((eventKey) => {
          refCurrent!.removeEventListener(eventKey, customEvents[eventKey]);
        });
      };
    }
  }, [customEvents, ref, props]);

  return ref;
}
export const fluid = {
  environments: {
    dev: {
      label: 'Development',
      esm: 'https://fluid-dev.lmig.com/fluid/build/fluid.esm.js',
      legacy: 'https://fluid-dev.lmig.com/fluid/build/fluid.js',
      css: 'https://fluid-dev.lmig.com/fluid/build/fluid.css',
    },
    test: {
      label: 'Test',
      esm: 'https://fluid-test.lmig.com/fluid/build/fluid.esm.js',
      legacy: 'https://fluid-test.lmig.com/fluid/build/fluid.js',
      css: 'https://fluid-test.lmig.com/fluid/build/fluid.css',
    },
    prod: {
      label: 'Production',
      esm: 'https://fluid.lmig.com/fluid/build/fluid.esm.js',
      legacy: 'https://fluid.lmig.com/fluid/build/fluid.js',
      css: 'https://fluid.lmig.com/fluid/build/fluid.css',
    },
    local: {
      label: 'Local',
      esm: 'http://localhost:3333/build/my-first-stencil-project.esm.js',
      legacy: 'http://localhost:3333/build/my-first-stencil-project.js',
      css: 'http://localhost:3333/build/my-first-stencil-project.css',
    },
    external: {
      label: 'External',
      esm: 'https://dsfe50dspcxki.cloudfront.net/fluid/build/fluid.esm.js',
      legacy: 'https://dsfe50dspcxki.cloudfront.net/fluid/build/fluid.esm.js',
    },
  },
  init: (fluid: FluidEnvironment, opts?: any) => {
    console.debug(
      `🧪 Loading FLUID with from ${fluid.label} with options:`,
      opts
    );
    addStyleSheet(fluid);
    addScriptLoader(fluid);
  },
};

// ========== IGNORE - replicating NPM package.

const addScriptLoader = (fluid: FluidEnvironment) => {
  const script = document.createElement('script');
  script.id = 'fluid-loader-script';
  if ('noModule' in script) {
    script.type = 'module';
    script.src = fluid.esm;
  } else {
    // script.type = 'text/javascript';
    // script.src = fluid.legacy;
  }

  if (!document.getElementById('fluid-loader-script')) {
    document.head.appendChild(script);
    document.body.appendChild(
      document.createComment(
        `🧪 Application running the ${fluid.label} build of FLUID.`
      )
    );
  }
};

const addStyleSheet = (fluid: FluidEnvironment) => {
  const element = document.createElement('link');
  element.setAttribute('rel', 'stylesheet');
  element.setAttribute('href', fluid.css);
  element.id = 'fluid-base-styles';

  if (!document.getElementById('fluid-base-styles')) {
    document.head.appendChild(element);
  }
};

export interface FluidEnvironment {
  label: string;
  esm: string;
  legacy: string;
  css: string;
}
