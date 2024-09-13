(() => {
  'use strict';
  const style = document.createElement('style');
  style.innerHTML = `
    #tournament-mode-button-df32jfsk21dfk3a4 {
      text-shadow: none;
      margin-top: 20px;
      color: #fff;
      width: 180px;
      border-radius: 5px;
      text-align: center;
      background: #fff;
      height: 32px;
      line-height: 32px;
      cursor: pointer;
      user-select: none;
      box-shadow: 0px 3px 4px -2px #000;
      background-color: green;
    }
    #tournament-mode-button-df32jfsk21dfk3a4:active {
      box-shadow: none !important;
    }
  `;
  document.head.appendChild(style);
  const servers = document.querySelectorAll('[data-server]');
  for (let i = 0; i < servers.length; i++) {
    const button = document.createElement('div');
    button.id = 'tournament-mode-button-df32jfsk21dfk3a4';
    button.innerHTML = 'Tournament Mode';
    const server = servers[i];
    server.nextElementSibling.firstElementChild.appendChild(button);
    button.addEventListener('click', () => {
      const serverID = server.dataset.server;
      const settings = server.nextElementSibling.nextElementSibling;
      server.querySelector(`input[id="server[${serverID}][public]"]`).checked = false;
      const varsCheckboxes = settings.querySelectorAll('input');
      for (let k = 0; k < varsCheckboxes.length; k++) {
        varsCheckboxes[k].checked = false;
      }
      settings.querySelector(`input[id="server[${serverID}][cvars][mp_clanwar]"]`).checked = true;
      settings.querySelector(`input[id="server[${serverID}][cvars][bonus_slot]"]`).checked = true;
      settings.querySelector(`input[id="server[${serverID}][cvars][mp_friendlyfire]"]`).checked = true;
      settings.querySelector(`select[name="server[${serverID}][cvars][minimal_skill]"]`).value = '0';
      settings.querySelector(`select[name="server[${serverID}][cvars][ping_limit]"]`).value = '1000';
      settings.querySelector(`select[name="server[${serverID}][cvars][mp_roundtime]"]`).value = '1.75';
      settings.querySelector(`select[name="server[${serverID}][cvars][mp_buytime]"]`).value = '0.25';
      settings.querySelector(`select[name="server[${serverID}][cvars][mp_c4timer]"]`).value = '35';
      settings.querySelector(`select[name="server[${serverID}][cvars][mp_freezetime]"]`).value = '15';
      settings.querySelector(`select[name="server[${serverID}][cvars][mp_startmoney]"]`).value = '800';
      settings.querySelector(`select[name="server[${serverID}][cvars][csem_sank_cd]"]`).value = '300';
      settings.querySelector(`select[name="server[${serverID}][cvars][limit_hegren]"]`).value = '1';
      settings.querySelector(`select[name="server[${serverID}][cvars][limit_sgren]"]`).value = '1';
      settings.querySelector(`select[name="server[${serverID}][cvars][limit_flash]"]`).value = '2';
    });
  }
})();
