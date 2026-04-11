<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<footer class="mt-auto border-t border-slate-200 bg-slate-50 py-12 text-slate-900">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid gap-12 md:grid-cols-4">
			<div class="col-span-2">
				<a href={resolve('/')} class="text-2xl font-bold tracking-tighter text-slate-900">
					BACKGROUND
				</a>
				<p class="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
					Level up your dialog. Diskutiere auf einem neuen Niveau, ohne Populismus und Filterblasen.
				</p>
				<div class="mt-6 flex items-center gap-4">
					<a
						href="mailto:info@background-app.de"
						aria-label="E-Mail an info@background-app.de"
						class="text-slate-600 transition-colors hover:text-blue-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
							/>
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/company/background-app"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Background auf LinkedIn"
						class="text-slate-600 transition-colors hover:text-blue-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-6 w-6"
						>
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
					</a>
					<a
						href="https://www.instagram.com/app.background/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Background auf Instagram"
						class="text-slate-600 transition-colors hover:text-blue-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-6 w-6"
						>
							<path
								d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
							/>
						</svg>
					</a>
				</div>
			</div>

			<div>
				<h3 class="text-sm font-semibold tracking-wider text-slate-900 uppercase">
					Rechtliches - Website
				</h3>
				<ul class="mt-4 space-y-2">
					<li>
						<a
							href={resolve('/impressum')}
							class="text-sm text-slate-600 transition-colors hover:text-blue-600">Impressum</a
						>
					</li>
					<li>
						<a
							href={resolve('/datenschutz')}
							class="text-sm text-slate-600 transition-colors hover:text-blue-600">Datenschutz</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="text-sm font-semibold tracking-wider text-slate-900 uppercase">
					Rechtliches - App
				</h3>
				<ul class="mt-4 space-y-2">
					<li>
						<a
							href={resolve('/faq')}
							class="text-sm text-slate-600 transition-colors hover:text-blue-600">FAQ</a
						>
					</li>
					<li>
						<a
							href={resolve('/terms-and-conditions')}
							class="text-sm text-slate-600 transition-colors hover:text-blue-600"
							>Terms and Conditions</a
						>
					</li>
					<li>
						<a
							href={resolve('/privacy-policy-app')}
							class="text-sm text-slate-600 transition-colors hover:text-blue-600">Datenschutz</a
						>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 flex items-center justify-between border-t border-slate-200 pt-8">
			<p class="text-xs text-slate-500">
				&copy; {new Date().getFullYear()} Background by Fulton & Bock GbR. Alle Rechte vorbehalten.
			</p>
		</div>
	</div>
</footer>
