import React from "react";
type TRoutes = {
  path: string;
  exact?: boolean;
  page: React.FC<RouteComponentProps<{}, StaticContext, unknown>>;
}[];
export default TRoutes;
