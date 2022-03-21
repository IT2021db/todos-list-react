import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthorPage from './features/author/AuthorPage';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import { StyledNavLink } from './styled';
import { toAuthor, toTask, toTasks } from './routes';

const App = () => (
	<HashRouter>
		<nav>
			<ul>
				<li>
					<StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
				</li>
			</ul>
		</nav>
		<Switch>
			<Route path={toTask()}>
				<TaskPage />
			</Route>
			<Route path={toTasks()}>
				<TasksPage />
			</Route>
			<Route path={toAuthor()}>
				<AuthorPage />
			</Route>
			<Route path={toTasks()}>
				<Redirect to={toTasks()} />
			</Route>
		</Switch>
	</HashRouter >
)

export default App;