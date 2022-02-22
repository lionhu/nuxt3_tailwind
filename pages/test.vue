<template>

<div class="flex flex-col items-center justify-center min-h-screen p-4 bg-black lg:p-10">
    <!-- <WidgetsRollingCards></WidgetsRollingCards> -->
    <!-- <div class="flex items-center justify-center h-72"> -->

        <div class="relative w-full max-w-lg h-72">
            <div class="absolute top-0 w-48 h-48 bg-purple-400 rounded-full left-24 filter blur-2xl animate-blob "></div>
            <div class="absolute top-0 w-48 h-48 bg-yellow-400 rounded-full right-24 filter blur-2xl animate-blob animation-delay-2000"></div>
            <div class="absolute w-48 h-48 bg-blue-400 rounded-full -bottom-0.5 left-36  filter blur-2xl  animate-blob animation-delay-4000"></div>
            <div class="relative m-8 space-y-4">
                <div class="flex items-center justify-between p-5 space-x-8 bg-white rounded-lg">
                    <div class="flex-1">
                        <div class="w-48 h-4 bg-gray-300 rounded"></div>
                    </div>
                    <div>
                        <div class="w-24 h-6 bg-purple-300 rounded-lg"></div>
                    </div>
                </div>
                <div class="flex items-center justify-between p-5 space-x-8 bg-white rounded-lg">
                    <div class="flex-1">
                        <div class="w-56 h-4 bg-gray-300 rounded"></div>
                    </div>
                    <div>
                        <div class="w-20 h-6 bg-yellow-300 rounded-lg"></div>
                    </div>
                </div>
                <div class="flex items-center justify-between p-5 space-x-8 bg-white rounded-lg">
                    <div class="flex-1">
                        <div class="h-4 bg-gray-300 rounded w-44"></div>
                    </div>
                    <div>
                        <div class="h-6 bg-pink-300 rounded-lg w-28"></div>
                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
    <div class="relative flex items-center justify-center ">
        <button class="relative text-xl font-thin">
            <div class="absolute inset-x-0 h-full border rounded-lg bg-grey-100 border-grey-100 -bottom-1"></div>
            <div class="relative px-10 py-4 transition duration-500 transform bg-gray-100 border border-gray-500 rounded-lg hover:translate-y-1">click Me</div>
        </button>

        <div class="relative group">
            <div class="absolute bg-gradient-to-r from-pink-600 to-purple-500 rounded-lg -inset-0.5 blur opacity-75 group-hover:opacity-100 transaction group-hover:duration-200 duration-1000 animate-tilt"></div>
            <button class="relative flex items-center py-4 space-x-2 leading-none bg-black divide-x divide-gray-500 rounded-lg sp px-7">
                <span class="flex items-center space-x-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <span class="text-gray-100">Labs Release 2021.09</span>
                </span>
                <span class="pl-4 text-indigo-400 duration-200 group-hover:text-gray-100 transaction">See what's new</span>
            </button>
        </div>
    </div>
</div>
</template>
