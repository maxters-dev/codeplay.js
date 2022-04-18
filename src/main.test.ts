import sandbox from './main'

test('testing', () => {

  const iframe = document.createElement('iframe');

  document.body.appendChild(iframe)

  sandbox(iframe, {
    js: '/** console.log("teste") **/',
    html: '<div class="testing-div">1</div><div class="testing-div">2</div>',
    css: 'body { background-color: red; }'
  })

  expect(iframe.contentWindow?.document.querySelectorAll('script').length).toBe(1)
  expect(iframe.contentWindow?.document.querySelectorAll('style').length).toBe(1)
  expect(iframe.contentWindow?.document.querySelectorAll('.testing-div').length).toBe(2)
});

