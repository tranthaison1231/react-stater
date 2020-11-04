import * as qs from 'query-string';
import { useMemo } from 'react';
import {
  match,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

interface Routes {
  back: () => void;
  history: any;
  location: any;
  match: match<{}>;
  pathname: any;
  push: any;
  query: any;
  replace: any;
  routerState: any;
}

const useRouter = (): Routes => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(() => {
    return {
      back: history.goBack,
      history,
      location,
      match,
      pathname: location.pathname,
      push: history.push,
      query: {
        ...qs.parse(location.search),
        ...params,
      },
      replace: history.replace,
      routerState: location.state,
    };
  }, [history, location, params, match]);
};

export default useRouter;
