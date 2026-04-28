# Receptly Convai Wrapper

Use this wrapper script to expose the ElevenLabs Convai widget as `<receptly-convai>`.

## Usage

```html
<script src="./receptly-convai.js"></script>

<receptly-convai agent-id="agent_4201kq8k58wre8vaxw9tsq6bc5sh"></receptly-convai>
```

You can place the element anywhere in the page after the wrapper script is loaded.

## Mount into any container

```html
<div id="chat-slot"></div>
<script src="./receptly-convai.js"></script>
<script>
  window.ReceptlyConvai.mount('#chat-slot', {
    agentId: 'agent_4201kq8k58wre8vaxw9tsq6bc5sh',
    label: 'Receptly-convai'
  });
</script>
```

## Optional label

```html
<receptly-convai
  agent-id="agent_4201kq8k58wre8vaxw9tsq6bc5sh"
  label="Receptly-convai"
></receptly-convai>
```