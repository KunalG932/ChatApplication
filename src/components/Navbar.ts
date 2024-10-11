import { navigateTo } from '../main';

export function renderNavbar() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = `
            <nav class="bg-blue-600 text-white shadow-lg">
                <div class="container mx-auto px-4">
                    <div class="flex items-center justify-between h-16">
                        <a href="/" class="flex items-center" onclick="event.preventDefault(); navigateTo('/')">
                            <span class="font-bold text-xl">Virtual Study Group</span>
                        </a>
                        <div class="flex space-x-4">
                            <a href="/study-groups" class="hover:bg-blue-700 px-3 py-2 rounded" onclick="event.preventDefault(); navigateTo('/study-groups')">Study Groups</a>
                            <a href="/login" class="bg-white text-blue-600 hover:bg-blue-100 px-4 py-2 rounded" onclick="event.preventDefault(); navigateTo('/login')">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}