// Store player instances to avoid conflicts
window.ytPlayers = window.ytPlayers || {};

// Caches the DotNet helper object for callbacks
let dotNetHelper;

// Loads the YouTube IFrame Player API script
function loadApiScript() {
    if (window.YT && typeof window.YT.Player === 'function') {
        return Promise.resolve();
    }

    return new Promise((resolve) => {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        window.onYouTubeIframeAPIReady = () => resolve();
    });
}

// Creates a new YouTube player instance
export async function createPlayer(helper, containerId, videoId, loop, autoplay) {
    dotNetHelper = helper;
    await loadApiScript();

    window.ytPlayers[containerId] = new YT.Player(containerId, {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
            'autoplay': 1, // Keep autoplay enabled
            'mute': 1,     // Start muted
            'controls': 0,
            'modestbranding': 1,
            'rel': 0,
            'playsinline': 1,
            'enablejsapi': 1,
            'loop': loop ? 1 : 0,
            'playlist': videoId, // Required for loop to work on a single video
        },
        events: {
            'onReady': (event) => {
                // Muting is handled by playerVars, now explicitly play
                event.target.playVideo();
                dotNetHelper.invokeMethodAsync('OnPlayerReady');
            }
        }
    });
}

// Toggles the mute state of a specific player
export function toggleMute(containerId, isMuted) {
    const player = window.ytPlayers[containerId];
    if (player && typeof player.mute === 'function') {
        if (isMuted) {
            player.mute();
        } else {
            player.unMute();
        }
    }
}

// Restarts a specific player from the beginning
export function restart(containerId) {
    const player = window.ytPlayers[containerId];
    if (player && typeof player.seekTo === 'function') {
        player.seekTo(0);
    }
}
