        const hasAttr = (e,a) => a.some(_=> e.attr(_)!==undefined);
        $('a').each(function() {
          const $this = $(this);
          if(hasAttr($this,["data-fancybox","ignore-external-link"])) return;
          const href = $this.attr('href');
          if (href && href.match('^((http|https|thunder|qqdl|ed2k|Flashget|qbrowser|ftp|rtsp|mms)://)')) {
            const strs = href.split('/');
            if (strs.length >= 3) {
                const host = strs[2];
                if (host !== 'blog.cyfan.top' || window.location.host || host !== 'travellings.now.sh' || host !== 'cyfan.top' || host !== 'tools.cyfan.top' || host !== 'markdown-pre.cyfan.top' || host !== 'html-pre.cyfan.top') {
                    $this.attr('href', '/jump.html?url='+href+'').attr('rel', 'external nofollow noopener noreferrer');
                    if (true) {
                        $this.attr('target', '_blank');
                    }
                }
            }
          }
        });

