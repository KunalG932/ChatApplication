import { renderNavbar } from './components/Navbar';
import { renderHomePage } from './pages/Home';
import { renderLoginPage } from './pages/Login';
import { renderRegisterPage } from './pages/Register';
import { renderDashboardPage } from './pages/Dashboard';
import { renderStudyGroupsPage } from './pages/StudyGroups';

const routes: { [key: string]: () => void } = {
    '/': renderHomePage,
    '/login': renderLoginPage,
    '/register': renderRegisterPage,
    '/dashboard': renderDashboardPage,
    '/study-groups': renderStudyGroupsPage
};

function router() {
    const path = window.location.pathname;
    const renderFunction = routes[path] || renderHomePage;
    renderNavbar();
    renderFunction();
}

window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', router);

export function navigateTo(path: string) {
    window.history.pushState({}, '', path);
    router();
}