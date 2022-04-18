export default function sandbox(target: HTMLIFrameElement, options: { js?: string, html?: string, css?: string }) {

  if (! target.hasAttribute('sandbox')) {
    target.setAttribute('sandbox', '');
  }

  const output = (target.contentWindow as Window).document;

  output.open();

  output.writeln(
    options.html ?? '',
    `<script>${options.js ?? ''}</script>`,
    `<style type="text/css">${options.css ?? ''}</style>`
  );

  output.close();

  return target;
}  
