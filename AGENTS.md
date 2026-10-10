<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep all editable portfolio facts and missing-value states in src/data/portfolio.ts so changes remain consistent across pages.
- Use TanStack file-based content routes and a shared root navigation/footer so every major section is independently shareable.
- Project concept visuals are explicitly labeled illustrations, never represented as actual screenshots; replace them with supplied screenshots when available.
- Keep personal contact client-side via email/social links without a form or persistence until a working service is requested.
