import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Celula } from './pages/Celula';
import { CelulasMap } from './pages/CelulasMap';
import { CreateCelula } from './pages/CreateCelula';
import { Landing } from './pages/Landing';

export function Routes() {
  return (
    <BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
      	<Route path="/app" component={CelulasMap} />

      	<Route path="/celulas/create" component={CreateCelula} />
      	<Route path="/celulas/:id" component={Celula} />
			</Switch>
    </BrowserRouter>
  )

}