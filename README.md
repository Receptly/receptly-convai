# Receptly Convai Wrapper

This repository hosts the lightweight `receptly-convai.js` wrapper that
creates a `<receptly-convai>` custom element and exposes a programmatic
`mount()` API for embedding the ElevenLabs Convai widget.

NOTE: this README intentionally does not include any agent IDs or
other sensitive identifiers. Replace `YOUR_AGENT_ID` below with your
own agent identifier when integrating.

## Quick usage (declarative)

```html
<script src="./receptly-convai.js" defer></script>

<receptly-convai agent-id="YOUR_AGENT_ID"></receptly-convai>
```

## Quick usage (imperative)

```html
<div id="chat-slot"></div>
<script src="./receptly-convai.js" defer></script>
<script>
  window.ReceptlyConvai.mount('#chat-slot', {
    agentId: 'YOUR_AGENT_ID',
    label: 'My chat'
  });
</script>
```

## CDN

You can serve `receptly-convai.js` from jsDelivr once this repository has a
GitHub release tag. Use a versioned URL for stable production usage:

```html
<script src="https://cdn.jsdelivr.net/gh/Receptly/Receptly-convai@v1.0.0/receptly-convai.js" defer></script>
```

If you want the moving latest tag during development, use:

```html
<script src="https://cdn.jsdelivr.net/gh/Receptly/Receptly-convai@latest/receptly-convai.js" defer></script>
```

This repository must be public for jsDelivr to serve it from GitHub.

## License

Choose a license and add a `LICENSE` file before publishing publicly.
