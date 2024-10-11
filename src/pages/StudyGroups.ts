export function renderStudyGroupsPage() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="max-w-4xl mx-auto px-4 py-8">
                <div class="flex justify-between items-center mb-6">
                    <h1 class="text-3xl font-bold">Study Groups</h1>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                        Create Group
                    </button>
                </div>
                <div class="mb-6 relative">
                    <input
                        type="text"
                        id="search-groups"
                        placeholder="Search study groups..."
                        class="w-full px-4 py-2 border rounded-lg pl-10"
                    />
                </div>
                <div id="study-groups-list" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${renderStudyGroups()}
                </div>
            </div>
        `;

        const searchInput = document.getElementById('search-groups');
        if (searchInput) {
            searchInput.addEventListener('input', handleSearchGroups);
        }
    }
}

function renderStudyGroups(searchTerm: string = '') {
    const studyGroups = [
        { id: 1, name: 'Math Study Group', members: 15, subject: 'Mathematics' },
        { id: 2, name: 'Physics Discussion', members: 10, subject: 'Physics' },
        { id: 3, name: 'Literature Club', members: 20, subject: 'English Literature' },
        { id: 4, name: 'Computer Science Projects', members: 12, subject: 'Computer Science' },
    ];

    const filteredGroups = studyGroups.filter(
        (group) =>
            group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            group.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredGroups.map(group => `
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 class="text-xl font-semibold mb-2">${group.name}</h2>
            <p class="text-gray-600 mb-4">${group.subject}</p>
            <div class="flex items-center text-sm text-gray-500">
                <span>${group.members} members</span>
            </div>
            <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Join Group
            </button>
        </div>
    `).join('');
}

function handleSearchGroups(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    const studyGroupsList = document.getElementById('study-groups-list');
    if (studyGroupsList) {
        studyGroupsList.innerHTML = renderStudyGroups(searchTerm);
    }
}