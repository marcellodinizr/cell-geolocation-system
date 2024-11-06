import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CellsMap } from './pages/CellsMap';
import { Landing } from './pages/Landing';

export function Routes() {
  return (
    <BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
      	<Route path="/app" component={CellsMap} />
			</Switch>
    </BrowserRouter>
  )

}