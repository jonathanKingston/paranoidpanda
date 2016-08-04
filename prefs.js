const DEFAULT_VAL = Symbol();
module.exports = {
  'default': DEFAULT_VAL,
  'prefs': {
    'paranoidpanda.level': [
      1,
      2,
      3
    ],
    'privacy.donottrackheader.enabled': [
      DEFAULT_VAL,
      true,
      true
    ],
    'privacy.donottrackheader.value': [
      DEFAULT_VAL,
      1,
      1
    ],
    'network.cookie.cookieBehavior': [
      DEFAULT_VAL,
      3,
      1
    ],
    'network.cookie.lifetimePolicy': [
      DEFAULT_VAL,
      2,
      2
    ],
    'network.http.referer.trimmingPolicy': [
      DEFAULT_VAL,
      2,
      2
    ],
    'privacy.trackingprotection.enabled': [
      DEFAULT_VAL,
      true,
      true
    ],
    'security.mixed_content.block_display_content': [
      DEFAULT_VAL,
      true,
      true
    ],
    'signon.autofillForms': [
      DEFAULT_VAL,
      false,
      false
    ],
    'security.ssl.treat_unsafe_negotiation_as_broken': [
      DEFAULT_VAL,
      true,
      true
    ],
    'media.peerconnection.ice.relay_only': [
      DEFAULT_VAL,
      true,
      true
    ],
    'media.peerconnection.enabled': [
      DEFAULT_VAL,
      false,
      false
    ],
    'network.dns.disablePrefetch': [
      DEFAULT_VAL,
      true,
      true
    ],
    'webgl.disabled': [
      DEFAULT_VAL,
      true,
      true
    ],
    'beacon.disabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'geo.disabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'security.nocertdb': [
      false,
      false,
      true
    ],
    'permissions.memory_only': [
      false,
      false,
      true
    ],
    'network.predictor.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.cert_pinning.enforcement_level': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      2
    ],
    'security.tls.version.min': [
      DEFAULT_VAL,
      2,
      3
    ],
    'browser.privatebrowsing.autostart': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'network.http.referer.sendRefererHeader': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'plugin.state.flash': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'security.OCSP.require': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'security.ssl.require_safe_negotiation': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'beacon.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'geo.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.newtabpage.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.newtabpage.enhanced': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.urlbar.trimURLs': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'network.cookie.life': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      2
    ],
    'network.http.referer.spoofSource': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.clearOnShutdown.cache': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.clearOnShutdown.cookies': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.clearOnShutdown.downloads': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.clearOnShutdown.formdata': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.clearOnShutdown.history': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.clearOnShutdown.offlineApps': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.clearOnShutdown.openWindows': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.clearOnShutdown.sessions': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.clearOnShutdown.siteSettings': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.sanitize.sanitizeOnShutdown': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.trackingprotection.pbmode.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.trackingprotection.ui.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'urlclassifier.trackingWhitelistTable': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      'test-trackwhite-simple'
    ],
    'gfx.direct2d.disabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'layers.acceleration.disabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'media.navigator.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'dom.battery.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'dom.telephony.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'dom.event.clipboardevents.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'dom.enable_performance': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'media.webspeech.recognition.enable': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'media.getusermedia.screensharing.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'device.sensors.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.send_pings': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.send_pings.require_same_host': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'dom.gamepad.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'dom.vr.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'dom.webnotifications.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'camera.control.face_detection.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'clipboard.autocopy': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'keyword.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.fixup.alternate.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'network.proxy.socks_remote_dns': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'security.mixed_content.block_active_content': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'javascript.options.methodjit.chrome': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'javascript.options.methodjit.content': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'network.jar.open-unsafe-types': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.xpconnect.plugin.unrestricted': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.fileuri.strict_origin_policy': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'browser.urlbar.filter.javascript': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'javascript.options.asmjs': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'gfx.font_rendering.opentype_svg.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'media.video_stats.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'general.buildID.override': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      '20100101'
    ],
    'browser.display.use_document_fonts': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'extensions.getAddons.cache.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'plugin.state.libgnome-shell-browser-plugin': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'plugins.click_to_play': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'extensions.update.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'extensions.blocklist.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'toolkit.telemetry.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'toolkit.telemetry.unified': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'experiments.supported': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'experiments.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'pdfjs.disabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'datareporting.healthreport.uploadEnabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'datareporting.healthreport.service.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'datareporting.policy.dataSubmissionEnabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.newtab.preload': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.newtabpage.directory.ping': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      ''
    ],
    'browser.newtabpage.directory.source': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      'data:text/plain,{}'
    ],
    'browser.selfsupport.url': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      ''
    ],
    'loop.logDomains': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.safebrowsing.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'browser.safebrowsing.malware.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'browser.safebrowsing.downloads.remote.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.pocket.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'network.prefetch-next': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.search.geoip.url': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      ''
    ],
    'network.dns.disablePrefetchFromHTTPS': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'network.dns.blockDotOnion': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'network.seer.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.search.suggest.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.urlbar.suggest.searches': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.casting.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'media.gmp-gmpopenh264.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'media.gmp-manager.url': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      ''
    ],
    'network.http.speculative-parallel-limit': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'browser.aboutHomeSnippets.updateUrl': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      ''
    ],
    'browser.search.update': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'network.negotiate-auth.allow-insecure-ntlm-v1': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.csp.experimentalEnabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'security.csp.enable': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'security.sri.enable': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'network.http.sendSecureXSiteReferrer': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'network.cookie.thirdparty.sessionOnly': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'browser.sessionstore.postdata': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'browser.sessionstore.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.cache.offline.enable': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'extensions.ghostery.privateBrowsing': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'privacy.clearOnShutdown.passwords': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'places.history.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.cache.disk.enable': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.cache.disk_cache_ssl': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'signon.rememberSignons': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.history_expire_days': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'browser.history_expire_sites': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'browser.history_expire_visits': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'browser.download.manager.retention': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'browser.formfill.enable': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.formfill.expire_days': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'browser.sessionstore.privacy_level': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      2
    ],
    'browser.helperApps.deleteTempFileOnExit': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'browser.pagethumbnails.capturing_disabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'browser.download.folderList': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      2
    ],
    'browser.download.useDownloadDir': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.newtab.url': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      'about:blank'
    ],
    'plugins.update.notifyUser': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'plugins.hide_infobar_for_outdated_plugin': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.warn_entering_weak': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'network.IDN_show_punycode': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'browser.urlbar.autoFill': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.urlbar.autoFill.typed': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.urlbar.maxRichResults': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'layout.css.visited_links_enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.urlbar.autocomplete.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'browser.shell.checkDefaultBrowser': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl.warn_missing_rfc5746': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      1
    ],
    'security.ask_for_password': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      0
    ],
    'network.stricttransportsecurity.preloadlist': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'security.OCSP.enabled': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      1
    ],
    'security.ssl.enable_ocsp_stapling': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'security.enable_tls_session_tickets': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.pki.sha1_enforcement_level': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      2
    ],
    'security.ssl.errorReporting.automatic': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_null_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_null_md5': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdhe_rsa_null_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdhe_ecdsa_null_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdh_rsa_null_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdh_ecdsa_null_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_seed_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_rc4_40_md5': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_rc2_40_md5': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_1024_rc4_56_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_camellia_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdhe_rsa_aes_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdhe_ecdsa_aes_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdh_rsa_aes_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdh_ecdsa_aes_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.dhe_rsa_camellia_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.dhe_rsa_aes_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdh_ecdsa_rc4_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdh_rsa_rc4_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdhe_ecdsa_rc4_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdhe_rsa_rc4_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_rc4_128_md5': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_rc4_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.tls.unrestricted_rc4_fallback': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.dhe_dss_des_ede3_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.dhe_rsa_des_ede3_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdh_ecdsa_des_ede3_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdh_rsa_des_ede3_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdhe_ecdsa_des_ede3_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdhe_rsa_des_ede3_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_des_ede3_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_fips_des_ede3_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdh_rsa_aes_256_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdh_ecdsa_aes_256_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_camellia_256_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.ecdhe_rsa_aes_256_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'security.ssl3.ecdhe_ecdsa_aes_256_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'security.ssl3.ecdhe_rsa_aes_128_gcm_sha256': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'security.ssl3.dhe_rsa_camellia_256_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.dhe_rsa_aes_256_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.dhe_dss_aes_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.dhe_dss_aes_256_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.dhe_dss_camellia_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.dhe_dss_camellia_256_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      false
    ],
    'security.ssl3.rsa_aes_256_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ],
    'security.ssl3.rsa_aes_128_sha': [
      DEFAULT_VAL,
      DEFAULT_VAL,
      true
    ]
  }
};
