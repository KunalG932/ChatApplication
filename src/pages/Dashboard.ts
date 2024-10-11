export function renderDashboardPage() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="max-w-4xl mx-auto px-4 py-8">
                <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${renderUpcomingSessions()}
                    ${renderRecentActivities()}
                </div>
                <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${renderQuickActionCard("Join a Study Group", "/study-groups")}
                    ${renderQuickActionCard("Browse Resources", "/resources")}
                    ${renderQuickActionCard("Start a Discussion", "/discussions")}
                </div>
            </div>
        `;
    }
}

function renderUpcomingSessions() {
    const upcomingSessions = [
        { id: 1, title: 'Math Study Session', date: '2024-03-20', time: '15:00' },
        { id: 2, title: 'Physics Group Discussion', date: '2024-03-22', time: '14:30' },
    ];

    return `
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4 flex items-center">
                Upcoming Study Sessions
            </h2>
            <ul>
                ${upcomingSessions.map(session => `
                    <li class="mb-3">
                        <p class="font-medium">${session.title}</p>
                        <p class="text-sm text-gray-600">${session.date} at ${session.time}</p>
                    </li>
                `).join('')}
            </ul>
            <a href="/study-groups" class="mt-4 inline-block text-blue-500 hover:text-blue-700" onclick="event.preventDefault(); navigateTo('/study-groups')">
                View all study groups
            </a>
        </div>
    `;
}

function renderRecentActivities() {
    const recentActivities = [
        { id: 1, type: 'message', content: 'New message in Math Group', time: '2 hours ago' },
        { id: 2, type: 'resource', content: 'New study guide uploaded', time: '1 day ago' },
    ];

    return `
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4 flex items-center">
                Recent Activities
            </h2>
            <ul>
                ${recentActivities.map(activity => `
                    <li class="mb-3">
                        <p>${activity.content}</p>
                        <p class="text-sm text-gray-600">${activity.time}</p>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

function renderQuickActionCard(title: string, link: string) {
    return `
        <a href="${link}" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" onclick="event.preventDefault(); navigateTo('${link}')">
            <div class="flex items-center mb-4">
                <h3 class="text-lg font-semibold ml-3">${title}</h3>
            </div>
            <p class="text-blue-500 hover:text-blue-700">Get started →</p>
        </a>
    `;
}