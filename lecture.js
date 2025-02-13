function showTutorial(subject) {
    let tutorialContent = document.getElementById('tutorial-content');
    
   
    document.getElementById('tutorials').style.display = 'block';
  
   
    tutorialContent.innerHTML = '';
  
   
    if (subject === 'Physics') {
      tutorialContent.innerHTML = `
        <h3>Physics Tutorials</h3>
        <div class="playlist" style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px;">
         <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=hCSm5Nr9XonLwo0A&amp;list=PL9tzqmHNezzDzB7DiCwyEYpBJYCSUCuzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=BDuGqW_ImAcL9RuZ&amp;list=PL6FMc32aLAdVl6fY-LfBhQQFnoTaVN4y3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=4QQETV6n9CaPDquj&amp;list=PLxyGaR3hEy3ieFuXAdtlenRNcey9Cxo6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=qiCSs-qQ8LNLAAVi&amp;list=PL_A4M5IAkMae_Hntw2myU3dHQ417zcxn6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=_fg77Ns6CHjuRzv3&amp;list=PLktE8rb6pVnh767SaJurJxI9BaRAqzEgt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        
      </div>`;
    } else if (subject === 'Chemistry') {
      tutorialContent.innerHTML = `
        <h3>Chemistry Tutorials</h3>
        <div class="playlist" style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px;">
          <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=Uu5Qyzccm2lSS_XB&amp;list=PLl_8nXmf6wa_tWMsweFttTuQ2JF2Wa-lD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=Z9dnqLMHvYiaaby4&amp;list=PLl_8nXmf6wa_LGG7jzZ5EreUUT-nDBWZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=XmVss4KkM7pE0l8o&amp;list=PLl_8nXmf6wa9go9iT7pyTBzP_3ChheHbW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=zHldtkdT_UAxIHrV&amp;list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=6OnSiIKQVll7zlxc&amp;list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=p8uTg91Sw2-wRZOx&amp;list=PLxyGaR3hEy3gO-zK_UUuhutbmf8sjIE1W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=X27IpgXzDBTXaYP4&amp;list=PLak8qUJu3BUW7Gc_yVBGds9LAu2iKaQ8G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=xTpf23rfIkgU1brx&amp;list=PLqSU78XQTtlTKUVjg3ulOzcKIuGIB9QxL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=xPz4_KfLIpsN1s9W&amp;list=PLktE8rb6pVngS1HQGQMgfdPmwkDZSWIcx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      `;
    } else if (subject === 'Mathematics') {
      tutorialContent.innerHTML = `
        <h3>Mathematics Tutorials</h3>
        <div class="playlist" style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px;">
        
        <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=pT2DMo_k7Z39TIz3&amp;list=PLTa2m6WeLW__zL1AoV8uEG13xiQMj2RU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=JTJoD0qwZwepVzPM&amp;list=PLTa2m6WeLW_9Y10X7YJGR9A0j1RCMfPEr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=Vi98QyK0kUt4iYzQ&amp;list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=ZT-WhvDS50qWjN4i&amp;list=PLxyGaR3hEy3gk_Li5kx4pJ7TSOYE2EQPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="220" height="158" src="https://www.youtube.com/embed/videoseries?si=01DpWZ8OM6rjXDzS&amp;list=PLnG6YW15b0oROKNSFhi6GIzGaRtIe0yFD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <iframe width="220" height="158" src="https://www.youtube.com/embed/j6NBRQ_FrNE?si=AfxtELRpz87bcgA4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      `;
    }
  }
  