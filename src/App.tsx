import { Routes, Route, HashRouter } from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute';
import { privateRoutes } from './Pages/routes';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          {privateRoutes.map((r, i) => (
            <Route key={`route-index-${i}`} index={r.isIndex ? true : undefined} element={r.element} path={r.path} />
          ))}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
