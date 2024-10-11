export function renderHomePage() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="text-center container mx-auto px-4 py-8">
                <h1 class="text-4xl font-bold mb-6">Welcome to Virtual Study Group</h1>
                <p class="text-xl mb-8">Collaborate, learn, and succeed together</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    ${renderFeatureCard("Join Study Groups", "Connect with peers and form study groups based on your interests and courses.")}
                    ${renderFeatureCard("Share Resources", "Upload and access study materials, notes, and helpful links within your groups.")}
                    ${renderFeatureCard("Real-time Discussions", "Engage in live chat discussions and collaborative problem-solving sessions.")}
                </div>
                <a href="/register" class="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300" onclick="event.preventDefault(); navigateTo('/register')">
                    Get Started
                </a>
            </div>
        `;
    }
}

function renderFeatureCard(title: string, description: string) {
    return `
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-2">${title}</h2>
            <p class="text-gray-600">${description}</p>
        </div>
    `;
}