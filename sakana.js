const github = SakanaWidget.getCharacter('chisato');
github.image = "https://raw.githubusercontent.com/0413one/0413one.github.io/refs/heads/main/IMG_2286.png";
SakanaWidget.registerCharacter('github', github);
new SakanaWidget({ character: 'github' }).mount('#sakana-widget');