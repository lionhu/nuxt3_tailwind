<template>
<div class="drawer drawer-mobile">
    <input id="main-menu" type="checkbox" class="drawer-toggle" />
    <main class="flex-grow block overflow-x-hidden bg-base-100 text-base-content drawer-content">
        <WidgetsNavbar></WidgetsNavbar>
        <slot />
    </main>
    <WidgetsSidebar></WidgetsSidebar>
</div>
</template>
