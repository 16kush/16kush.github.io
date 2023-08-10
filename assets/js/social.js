const socialMediaLinks = [
    { platform: "GitHub", link: "https://www.github.com/16kush", icon: "github-alt" },
    { platform: "LinkedIn", link: "https://www.linkedin.com/in/kush-shah-47376b20b/", icon: "linkedin-alt" },
    { platform: "Twitter", link: "https://x.com/kush_islost", icon: "twitter-alt" },
    { platform: "Instagram", link: "https://instagram.com/16kush", icon: "instagram" },
    { platform: "Discord", link: "https://discord.com/users/723620056910659646", icon: "discord" },
    { platform: "LeetCode", link: "https://leetcode.com/rush3016", icon: "react" },
    { platform: "Snapchat", link: "https://www.snapchat.com/add/kush.islost", icon: "snapchat-alt" },
    { platform: "Reddit", link: "https://www.reddit.com/user/16kush", icon: "reddit-alien-alt" },
];

function generateSocialIcons(containerClass, socialLinks) {
    const container = document.querySelector(`.${containerClass}`);
    
    socialLinks.forEach(socialLink => {
        const socialIcon = document.createElement('a');
        socialIcon.href = socialLink.link;
        socialIcon.target = "_blank";
        socialIcon.classList.add(`${containerClass}`);
        
        const icon = document.createElement('i');
        icon.classList.add('uil', `uil-${socialLink.icon}`);
        socialIcon.appendChild(icon);
        
        container.appendChild(socialIcon);
    });
}

generateSocialIcons("home__social", socialMediaLinks);
generateSocialIcons("footer__social", socialMediaLinks);
