<script setup>
import { computed } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import { useLegaltechI18n } from '@/composables/useLegaltechI18n';
import logoUrl from '@/assets/images/logo.png';
import partnerNazm from '@/assets/images/nazm_logo.png';
import partnerEcit from '@/assets/images/ecit_logo.png';
import partnerEcitHub from '@/assets/images/ecit_hub_logo.png';
import partnerSokon from '@/assets/images/sokon_logo.png';

defineProps({
    canLogin: { type: Boolean, default: false },
    canRegister: { type: Boolean, default: false },
});

const { locale, setLocale, t } = useLegaltechI18n();

const pageTitle = computed(() =>
    locale.value === 'ar' ? 'Legal Technologies | التقنية القانونية' : 'Legal Technologies',
);

const partners = [
    { logo: partnerNazm, alt: 'Nazm', nameKey: 'partners.p1.name', roleKey: 'partners.p1.role', descKey: 'partners.p1.desc' },
    { logo: partnerEcit, alt: 'ECIT', nameKey: 'partners.p2.name', roleKey: 'partners.p2.role', descKey: 'partners.p2.desc' },
    { logo: partnerEcitHub, alt: 'ECIT Hub', nameKey: 'partners.p3.name', roleKey: 'partners.p3.role', descKey: 'partners.p3.desc' },
    { logo: partnerSokon, alt: 'Sokon', nameKey: 'partners.p4.name', roleKey: 'partners.p4.role', descKey: 'partners.p4.desc' },
];

const services = [
    { titleKey: 'services.s1.title', descKey: 'services.s1.desc', icon: 'doc' },
    { titleKey: 'services.s2.title', descKey: 'services.s2.desc', icon: 'users' },
    { titleKey: 'services.s3.title', descKey: 'services.s3.desc', icon: 'calendar' },
    { titleKey: 'services.s4.title', descKey: 'services.s4.desc', icon: 'bell' },
    { titleKey: 'services.s5.title', descKey: 'services.s5.desc', icon: 'search' },
    { titleKey: 'services.s6.title', descKey: 'services.s6.desc', icon: 'shield' },
    { titleKey: 'services.s7.title', descKey: 'services.s7.desc', icon: 'mobile' },
];
</script>

<template>
    <Head :title="pageTitle" />

    <div class="min-h-screen bg-[#f8f9fa] text-[15px] leading-relaxed text-navy antialiased">
        <header
            class="sticky top-0 z-[100] border-b border-transparent bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
        >
            <div
                class="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-6 py-3.5"
            >
                <img
                    :src="logoUrl"
                    alt="Legal Technologies"
                    class="h-14 w-auto shrink-0"
                />
                <nav
                    class="flex flex-wrap items-center justify-end gap-x-7 gap-y-2 text-[0.95rem] font-medium text-navy"
                >
                    <a href="#about" class="transition hover:text-teal">{{
                        t('nav.about')
                    }}</a>
                    <a href="#services" class="transition hover:text-teal">{{
                        t('nav.services')
                    }}</a>
                    <a href="#partners" class="transition hover:text-teal">{{
                        t('nav.partners')
                    }}</a>
                    <a href="#contact" class="transition hover:text-teal">{{
                        t('nav.contact')
                    }}</a>

                    <div
                        v-if="canLogin"
                        class="flex items-center gap-1 border-s border-gray-200 ps-4 ms-1"
                    >
                        <Link
                            v-if="$page.props.auth.user"
                            :href="route('dashboard')"
                            class="text-[0.95rem] font-medium transition hover:text-teal"
                        >
                            {{ t('nav.dashboard') }}
                        </Link>
                        <Link
                            v-else
                            :href="route('login')"
                            class="text-[0.95rem] font-medium transition hover:text-teal"
                        >
                            {{ t('nav.login') }}
                        </Link>
                        <Link
                            v-if="canRegister && !$page.props.auth.user"
                            :href="route('register')"
                            class="text-[0.95rem] font-medium transition hover:text-teal"
                        >
                            {{ t('nav.register') }}
                        </Link>
                    </div>

                    <div class="flex gap-1">
                        <button
                            type="button"
                            class="rounded-md px-2.5 py-1.5 text-[0.85rem] font-medium transition"
                            :class="
                                locale === 'en'
                                    ? 'bg-teal text-white'
                                    : 'text-navy-light hover:bg-teal/15 hover:text-teal'
                            "
                            @click="setLocale('en')"
                        >
                            EN
                        </button>
                        <button
                            type="button"
                            class="rounded-md px-2.5 py-1.5 text-[0.85rem] font-medium transition"
                            :class="
                                locale === 'ar'
                                    ? 'bg-teal text-white'
                                    : 'text-navy-light hover:bg-teal/15 hover:text-teal'
                            "
                            @click="setLocale('ar')"
                        >
                            AR
                        </button>
                    </div>
                </nav>
            </div>
        </header>

        <section
            class="bg-gradient-to-b from-navy to-[#1e2435] px-6 py-16 pb-[4.5rem] text-center text-white"
        >
            <div class="mx-auto max-w-[720px]">
                <h1 class="mb-4 text-4xl font-bold leading-tight md:text-[2.25rem]">
                    {{ t('hero.title') }}
                </h1>
                <p class="mb-7 text-lg opacity-[0.92] leading-[1.7]">
                    {{ t('hero.tagline') }}
                </p>
                <div class="flex flex-wrap justify-center gap-3">
                    <a
                        href="#services"
                        class="inline-block rounded-lg bg-teal px-6 py-3 text-[0.95rem] font-semibold text-white transition hover:bg-teal-dark"
                    >
                        {{ t('hero.ctaServices') }}
                    </a>
                    <a
                        href="#contact"
                        class="inline-block rounded-lg border-2 border-white/80 px-6 py-3 text-[0.95rem] font-semibold text-white transition hover:bg-white/20"
                    >
                        {{ t('hero.cta') }}
                    </a>
                </div>
            </div>
        </section>

        <section
            class="border-t border-[#e8eaed] bg-gradient-to-b from-teal/[0.08] to-navy/[0.04] px-6 py-14"
        >
            <div
                class="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-3 md:items-stretch"
            >
                <div
                    class="flex flex-col items-center rounded-xl border border-[#e8eaed] bg-white px-6 py-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                >
                    <div
                        class="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-teal/12 text-teal"
                    >
                        <svg class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>
                    <h3 class="mb-3 text-lg font-bold text-teal">{{ t('vmv.visionTitle') }}</h3>
                    <p class="text-[0.95rem] leading-relaxed text-navy-light">{{ t('vmv.visionText') }}</p>
                </div>
                <div
                    class="flex flex-col items-center rounded-xl border border-[#e8eaed] bg-white px-6 py-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                >
                    <div
                        class="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-teal/12 text-teal"
                    >
                        <svg class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
                    </div>
                    <h3 class="mb-3 text-lg font-bold text-teal">{{ t('vmv.missionTitle') }}</h3>
                    <p class="text-[0.95rem] leading-relaxed text-navy-light">{{ t('vmv.missionText') }}</p>
                </div>
                <div
                    class="flex flex-col items-center rounded-xl border border-[#e8eaed] bg-white px-6 py-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                >
                    <div
                        class="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-teal/12 text-teal"
                    >
                        <svg class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3 class="mb-3 text-lg font-bold text-teal">{{ t('vmv.valuesTitle') }}</h3>
                    <p class="text-[0.95rem] leading-relaxed text-navy-light">{{ t('vmv.valuesText') }}</p>
                </div>
            </div>
        </section>

        <section id="about" class="mx-auto max-w-[1100px] px-6 py-14">
            <h2 class="mb-2 text-center text-[1.75rem] font-bold text-navy">
                {{ t('about.title') }}
            </h2>
            <p class="mx-auto mb-10 max-w-xl text-center text-navy-light">
                {{ t('about.subtitle') }}
            </p>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div
                    class="rounded-xl border border-[#e8eaed] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                >
                    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-teal/12 text-teal">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                    </div>
                    <h3 class="mb-1.5 text-[1.05rem] font-semibold text-navy">{{ t('about.card1.title') }}</h3>
                    <p class="text-[0.9rem] leading-snug text-navy-light">{{ t('about.card1.desc') }}</p>
                </div>
                <div
                    class="rounded-xl border border-[#e8eaed] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                >
                    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-teal/12 text-teal">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <h3 class="mb-1.5 text-[1.05rem] font-semibold text-navy">{{ t('about.card2.title') }}</h3>
                    <p class="text-[0.9rem] leading-snug text-navy-light">{{ t('about.card2.desc') }}</p>
                </div>
                <div
                    class="rounded-xl border border-[#e8eaed] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                >
                    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-teal/12 text-teal">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    </div>
                    <h3 class="mb-1.5 text-[1.05rem] font-semibold text-navy">{{ t('about.card3.title') }}</h3>
                    <p class="text-[0.9rem] leading-snug text-navy-light">{{ t('about.card3.desc') }}</p>
                </div>
                <div
                    class="rounded-xl border border-[#e8eaed] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                >
                    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-teal/12 text-teal">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3 class="mb-1.5 text-[1.05rem] font-semibold text-navy">{{ t('about.card4.title') }}</h3>
                    <p class="text-[0.9rem] leading-snug text-navy-light">{{ t('about.card4.desc') }}</p>
                </div>
            </div>
        </section>

        <section id="services" class="bg-white px-6 py-14">
            <div class="mx-auto max-w-[1100px]">
                <h2 class="mb-2 text-center text-[1.75rem] font-bold text-navy">
                    {{ t('services.title') }}
                </h2>
                <p class="mx-auto mb-10 max-w-xl text-center text-navy-light">
                    {{ t('services.subtitle') }}
                </p>
                <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
                    <div
                        v-for="s in services"
                        :key="s.titleKey"
                        class="flex gap-4 rounded-xl border border-[#e8eaed] bg-white p-5 shadow-[0_2px_6px_rgba(0,0,0,0.04)] border-s-4 border-s-teal"
                    >
                        <div
                            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-teal/12 text-teal"
                        >
                            <svg v-if="s.icon === 'doc'" class="h-[22px] w-[22px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                            <svg v-else-if="s.icon === 'users'" class="h-[22px] w-[22px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            <svg v-else-if="s.icon === 'calendar'" class="h-[22px] w-[22px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            <svg v-else-if="s.icon === 'bell'" class="h-[22px] w-[22px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                            <svg v-else-if="s.icon === 'search'" class="h-[22px] w-[22px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                            <svg v-else-if="s.icon === 'shield'" class="h-[22px] w-[22px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            <svg v-else class="h-[22px] w-[22px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                        </div>
                        <div>
                            <h3 class="mb-0.5 text-[0.98rem] font-semibold text-navy">{{ t(s.titleKey) }}</h3>
                            <p class="text-[0.88rem] leading-normal text-navy-light">{{ t(s.descKey) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-teal px-6 py-10 text-center text-white">
            <h2 class="mb-2 text-2xl font-bold">{{ t('cta.title') }}</h2>
            <p class="mb-5 opacity-[0.95]">{{ t('cta.subtitle') }}</p>
            <a
                href="#contact"
                class="inline-block rounded-lg border-2 border-white px-6 py-3 text-[0.95rem] font-semibold text-white transition hover:bg-white/20"
            >
                {{ t('cta.button') }}
            </a>
        </section>

        <div id="partners" class="border-t border-[#e8eaed] bg-white px-6 py-14">
            <div class="mx-auto max-w-[1100px]">
                <h2 class="mb-2 text-center text-[1.75rem] font-bold text-navy">
                    {{ t('partners.title') }}
                </h2>
                <p class="mx-auto mb-10 max-w-xl text-center text-navy-light">
                    {{ t('partners.subtitle') }}
                </p>
                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div
                        v-for="p in partners"
                        :key="p.alt"
                        class="flex flex-col items-center rounded-xl border border-[#e8eaed] bg-[#f8f9fa] px-4 py-6 text-center transition hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                    >
                        <div
                            class="mb-4 flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-xl border border-[#e8eaed] bg-white p-1"
                        >
                            <img :src="p.logo" :alt="p.alt" class="h-full w-full object-contain" />
                        </div>
                        <div class="w-full">
                            <h3 class="mb-1 text-[0.95rem] font-semibold leading-snug text-navy">
                                {{ t(p.nameKey) }}
                            </h3>
                            <p class="mb-2 text-[0.88rem] font-medium text-teal">{{ t(p.roleKey) }}</p>
                            <p class="text-[0.85rem] leading-normal text-navy-light">{{ t(p.descKey) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section id="contact" class="bg-navy px-6 py-12 text-[#e8eaed]">
            <div class="mx-auto max-w-[1100px]">
                <h2 class="mb-4 text-2xl font-semibold text-teal">{{ t('contact.title') }}</h2>
                <p class="mb-4 text-[0.95rem]">{{ t('contact.subtitle') }}</p>
                <ul class="space-y-2 text-[0.98rem]">
                    <li>
                        <strong class="font-medium text-teal">{{ t('contact.email') }}</strong>
                        <a href="mailto:info@legaltech.sa" class="hover:underline">info@legaltech.sa</a>
                    </li>
                    <li>
                        <strong class="font-medium text-teal">{{ t('contact.website') }}</strong>
                        <a href="https://legaltech.sa" target="_blank" rel="noopener" class="hover:underline">legaltech.sa</a>
                    </li>
                    <li>
                        <strong class="font-medium text-teal">{{ t('contact.phone') }}</strong>
                        <a href="tel:+966501252878" class="hover:underline" dir="ltr">+966 50 125 2878</a>
                    </li>
                    <li>
                        <strong class="font-medium text-teal">{{ t('contact.phone2') }}</strong>
                        <span dir="ltr">011 487 6634</span>
                    </li>
                </ul>
            </div>
        </section>

        <footer class="bg-[#1a1d28] px-6 py-10 pb-6 text-[0.88rem] text-gray-400">
            <div class="mx-auto max-w-[1100px]">
                <div
                    class="mb-8 grid gap-8 border-b border-[#2d3344] pb-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"
                >
                    <div>
                        <img
                            :src="logoUrl"
                            alt="Legal Technologies"
                            class="mb-3 block h-12 opacity-90"
                        />
                        <p class="max-w-xs leading-relaxed">{{ t('footer.tagline') }}</p>
                    </div>
                    <div>
                        <h4 class="mb-4 text-[0.9rem] font-semibold text-white">{{ t('footer.support') }}</h4>
                        <ul class="space-y-2">
                            <li>
                                <a href="#contact" class="hover:text-teal">{{ t('footer.faq') }}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="mb-4 text-[0.9rem] font-semibold text-white">{{ t('footer.links') }}</h4>
                        <ul class="space-y-2">
                            <li><a href="#about" class="hover:text-teal">{{ t('nav.about') }}</a></li>
                            <li><a href="#services" class="hover:text-teal">{{ t('nav.services') }}</a></li>
                            <li><a href="#partners" class="hover:text-teal">{{ t('nav.partners') }}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="mb-4 text-[0.9rem] font-semibold text-white">{{ t('footer.contact') }}</h4>
                        <ul class="space-y-2">
                            <li>info@legaltech.sa</li>
                            <li dir="ltr">+966 50 125 2878</li>
                        </ul>
                    </div>
                </div>
                <p class="text-center text-[0.85rem] text-gray-500">
                    © 2026 Legal Technologies. {{ t('footer.rights') }}
                </p>
            </div>
        </footer>
    </div>
</template>
