(function(){
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  if(toggle && menu){
    toggle.addEventListener('click',()=>{
      const isOpen=menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(isOpen));
      toggle.textContent=isOpen?'Close':'Menu';
    });
    menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';}));
  }

  document.querySelectorAll('[data-year]').forEach(e=>{e.textContent=String(new Date().getFullYear())});

  const form=document.getElementById('contribution-form');
  if(!form) return;

  const status=document.getElementById('form-status');
  const copyButton=document.getElementById('copy-submission');

  function value(id){ return (document.getElementById(id)?.value || '').trim(); }
  function buildDraft(){
    const type=value('contribution-type');
    const area=value('research-area');
    const title=value('submission-title');
    const core=value('core-idea');
    const space=value('space-relevance');
    const evaluation=value('evaluation');
    const followup=value('followup');
    const displayName=value('display-name');
    const affiliation=value('affiliation');
    const featured=document.getElementById('featured-consent')?.checked ? 'Yes' : 'No';

    const body=[
      '## Contribution type',
      type,
      '',
      '## Research area',
      area,
      '',
      '## Core research question or project concept',
      core,
      '',
      '## Why this is space-native',
      space,
      '',
      '## What progress or success would look like',
      evaluation,
      '',
      '## Feedback, collaborator, or next step requested',
      followup || 'Not specified.',
      '',
      '## Public credit',
      displayName ? ('**Display name:** '+displayName) : 'Display name not specified.',
      affiliation ? ('**Affiliation:** '+affiliation) : 'Affiliation not specified.',
      '',
      '## Featured Contribution consideration',
      featured,
      '',
      '---',
      'Submitted through **Space-Native AI 2026 · Cycle I: Open Problems & Project Concepts**.',
      'The contributor confirms that the submission is intended for public discussion and does not contain confidential or restricted material.'
    ].join('\n');

    const issueTitle='[Cycle I / '+type+'] '+title;
    return {body,issueTitle};
  }

  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(!form.reportValidity()) return;
    const draft=buildDraft();
    const url='https://github.com/Space-Native-AI/space-native-ai.github.io/issues/new?title='+encodeURIComponent(draft.issueTitle)+'&body='+encodeURIComponent(draft.body);
    if(status) status.textContent='Opening GitHub with your structured draft. Review it there, then click “Submit new issue” to complete your contribution.';
    const opened=window.open(url,'_blank','noopener');
    if(!opened) window.location.href=url;
  });

  copyButton?.addEventListener('click',async()=>{
    if(!form.reportValidity()) return;
    const draft=buildDraft();
    try{
      await navigator.clipboard.writeText('# '+draft.issueTitle+'\n\n'+draft.body);
      if(status) status.textContent='Formatted draft copied to your clipboard.';
    }catch(err){
      if(status) status.textContent='Clipboard access was blocked by the browser. You can still continue to GitHub using the submission button.';
    }
  });
})();