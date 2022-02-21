<template>
<div class="drawer-side">
    <label for="main-menu" class="drawer-overlay"></label>
    <aside class="flex flex-col justify-between border-r md:hidden border-base-200 bg-base-100 text-base-content w-80">
        <div>
            <div class="flex items-center justify-center pt-3">
                <a href="/" aria-label="Homepage" class="px-2 flex-0 btn btn-ghost md:px-4 nuxt-link-active">
                    <div class="inline-block text-3xl font-title text-primary">
                        <span class="lowercase">daisy</span><span class="uppercase text-base-content">UI</span>
                    </div>
                </a>
            </div>
            <ul class="flex flex-col min-h-screen p-4 pt-2 menu compact">
                <li class="mt-4 menu-title">
                    <span> Docs </span>
                </li>
                <li>
                    <a href="/docs/install" class="capitalize">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                            >
                        </svg>
                        install
                    </a>
                </li>
                <li>
                    <a href="/docs/use" class="capitalize"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            >
                        </svg>
                        use
                    </a>
                </li>
                <li>
                    <a href="/docs/customize" class="capitalize"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                        customize components
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</div>
</template>
