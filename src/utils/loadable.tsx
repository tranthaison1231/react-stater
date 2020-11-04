import React, { Suspense, lazy } from 'react';

const loadable = (importFunc, { fallback } = { fallback: null }) => {
  const LazyComponent = lazy(() => importFunc);
  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
