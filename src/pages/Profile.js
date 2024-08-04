import { useDeferredValue, useEffect } from "react";
import { 
  NavLink, 
  Route, 
  Switch, 
  useHistory,
  useRouteMatch,
 } from 'react-router-dom';
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";

const Profile = ({login}) => {
  const history = useHistory();
  useEffect(() => {
    if(!login) {
      history.push('/');
    }
  }, [login, history]);

  const {path, url} = useRouteMatch();

  return (
    <>
    <h1>Profile pages</h1>
    <ul>
      <li>
        <NavLink to={`${url}/viewprofile`}>View Profile</NavLink>
      </li>
      <li>
        <NavLink to={`${url}/editprofile`}>Edit Profile</NavLink>
      </li>
    </ul>

    <Switch>
      <Route path={`${path}/viewprofile`} component={ViewProfile}/>
      <Route path={`${path}/editprofile`} component={EditProfile}/>
    </Switch>
    </>
  )
}
export default Profile;