const socialMediaLinks = [
    { platform: "GitHub", link: "https://www.github.com/16kush", iconLibrary: "uil", iconName: "github-alt" },
    { platform: "LeetCode", link: "https://leetcode.com/16kush", iconLibrary: "uil", iconName: "nerd" },
    { platform: "LinkedIn", link: "https://www.linkedin.com/in/16kush", iconLibrary: "uil", iconName: "linkedin-alt" },
    { platform: "Vsco", link: "https://vsco.co/16kush", iconLibrary: "uil", iconName: "shutter" },
];

function generateSocialIcons(containerClass, socialLinks) {
    const container = document.querySelector(`.${containerClass}`);
    
    socialLinks.forEach(socialLink => {
        const socialIcon = document.createElement('a');
        socialIcon.href = socialLink.link;
        socialIcon.target = "_blank";
        socialIcon.classList.add(`${containerClass}`);
        
        const icon = document.createElement('i');
        icon.classList.add(socialLink.iconLibrary, `${socialLink.iconLibrary}-${socialLink.iconName}`);
        socialIcon.appendChild(icon);
        
        container.appendChild(socialIcon);
    });
}

generateSocialIcons("home__social", socialMediaLinks);
generateSocialIcons("footer__social", socialMediaLinks);
