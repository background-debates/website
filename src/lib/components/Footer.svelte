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
			</div>

			<div>
				<h3 class="text-sm font-semibold tracking-wider text-slate-900 uppercase">Rechtliches</h3>
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
					<li>
						<a
							href={resolve('/agb')}
							class="text-sm text-slate-600 transition-colors hover:text-blue-600">AGB</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="text-sm font-semibold tracking-wider text-slate-900 uppercase">Kontakt</h3>
				<ul class="mt-4 space-y-2">
					<li>
						<a
							href="mailto:info@background-app.de"
							class="text-sm text-slate-600 transition-colors hover:text-blue-600"
							>info@background-app.de</a
						>
					</li>
					<li>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							class="text-sm text-slate-600 transition-colors hover:text-blue-600"
						>
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 flex items-center justify-between border-t border-slate-200 pt-8">
			<p class="text-xs text-slate-500">
				&copy; {new Date().getFullYear()} Background App. Alle Rechte vorbehalten.
			</p>
		</div>
	</div>
</footer>
