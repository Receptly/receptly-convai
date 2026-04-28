# Receptly Convai Wrapper

This repository hosts the lightweight `receptly-convai.js` wrapper that
creates a `<receptly-convai>` custom element and exposes a programmatic
`mount()` API for embedding the ElevenLabs Convai widget.

NOTE: this README intentionally does not include any agent IDs or
other sensitive identifiers. Replace `YOUR_AGENT_ID` below with your
own agent identifier when integrating.

## Quick usage (declarative)

Use this in any HTML file after loading the script once:


One-line version for copy/paste:

```html
<script src="https://cdn.jsdelivr.net/gh/Receptly/Receptly-convai@v1.0.1/receptly-convai.js" defer></script><receptly-convai agent-id="YOUR_AGENT_ID"></receptly-convai>
```

## CDN (jsDelivr)

You can also load the bundle directly from jsDelivr. Use the badge below to show jsDelivr stats, and pick either a specific tag or `@latest` for the newest release.

Badge (live stats):

<img src="https://data.jsdelivr.com/v1/package/gh/Receptly/Receptly-convai/badge" alt="jsDelivr" />

One-line (specific version):

```html
<script src="https://cdn.jsdelivr.net/gh/Receptly/Receptly-convai@v1.0.1/receptly-convai.js" defer></script>
<receptly-convai agent-id="YOUR_AGENT_ID"></receptly-convai>
```

One-line (always latest):

```html
<script src="https://cdn.jsdelivr.net/gh/Receptly/Receptly-convai@latest/receptly-convai.js" defer></script>
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
