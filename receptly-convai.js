(() => {
  if (typeof window === 'undefined' || typeof document === 'undefined' || typeof customElements === 'undefined') {
    return;
  }

  const WIDGET_SRC = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
  const ELEMENT_NAME = 'receptly-convai';
  const EMBED_NAME = 'elevenlabs-convai';

  let loadPromise = null;

  function loadEmbedScript() {
    if (customElements.get(EMBED_NAME)) {
      return Promise.resolve();
    }

    if (loadPromise) {
      return loadPromise;
    }

    const existingScript = document.querySelector(`script[src="${WIDGET_SRC}"]`);
    if (existingScript) {
      loadPromise = new Promise((resolve, reject) => {
        existingScript.addEventListener('load', resolve, { once: true });
        existingScript.addEventListener('error', reject, { once: true });
      });
      return loadPromise;
    }

    loadPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = WIDGET_SRC;
      script.async = true;
      script.type = 'text/javascript';
      script.addEventListener('load', resolve, { once: true });
      script.addEventListener('error', reject, { once: true });
      document.head.appendChild(script);
    });

    return loadPromise;
  }

  class ReceptlyConvai extends HTMLElement {
    static observedAttributes = ['agent-id', 'label'];

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback() {
      if (this.isConnected) {
        this.render();
      }
    }

    get agentId() {
      return this.getAttribute('agent-id') || this.dataset.agentId || '';
    }

    get label() {
      return this.getAttribute('label') || 'Receptly-convai';
    }

    ensureRoot() {
      if (!this.shadowRoot) {
        this.attachShadow({ mode: 'open' });
      }

      return this.shadowRoot;
    }

    renderState(message) {
      const root = this.ensureRoot();
      root.innerHTML = `
        <style>
          :host {
            display: block;
            width: 100%;
            height: 100%;
            font-family: inherit;
          }

          .frame {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 18px;
            background: linear-gradient(180deg, rgba(250, 250, 250, 0.98), rgba(243, 246, 248, 0.98));
          }

          .state {
            color: #334155;
            font-size: 14px;
            line-height: 1.5;
            text-align: center;
          }
        </style>
        <div class="frame">
          <div class="state">${message}</div>
        </div>
      `;
    }

    async render() {
      const agentId = this.agentId;
      const label = this.label;

      if (!agentId) {
        this.setAttribute('aria-label', label);
        this.setAttribute('role', 'alert');
        this.renderState('Missing agent-id');
        return;
      }

      this.setAttribute('aria-label', label);
      this.removeAttribute('role');
      this.renderState('Loading Receptly-convai...');

      try {
        await loadEmbedScript();

        const root = this.ensureRoot();
        root.innerHTML = '';

        const widget = document.createElement(EMBED_NAME);
        widget.setAttribute('agent-id', agentId);
        widget.setAttribute('part', 'widget');
        widget.style.display = 'block';
        widget.style.width = '100%';
        widget.style.height = '100%';
        root.appendChild(widget);
      } catch (error) {
        this.renderState('Receptly-convai could not load right now.');
      }
    }
  }

  function mount(target, options = {}) {
    const host = typeof target === 'string' ? document.querySelector(target) : target;

    if (!host) {
      throw new Error('ReceptlyConvai.mount: target not found');
    }

    const element = document.createElement(ELEMENT_NAME);

    if (options.agentId) {
      element.setAttribute('agent-id', options.agentId);
    }

    if (options.label) {
      element.setAttribute('label', options.label);
    }

    if (options.className) {
      element.className = options.className;
    }

    if (options.style && typeof options.style === 'object') {
      Object.assign(element.style, options.style);
    }

    host.replaceChildren(element);
    return element;
  }

  if (!customElements.get(ELEMENT_NAME)) {
    customElements.define(ELEMENT_NAME, ReceptlyConvai);
  }

  window.ReceptlyConvai = {
    elementName: ELEMENT_NAME,
    mount,
    ensureRegistered() {
      if (!customElements.get(ELEMENT_NAME)) {
        customElements.define(ELEMENT_NAME, ReceptlyConvai);
      }
      return ELEMENT_NAME;
    },
    loadEmbedScript,
  };
})();