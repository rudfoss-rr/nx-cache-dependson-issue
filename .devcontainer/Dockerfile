FROM mcr.microsoft.com/devcontainers/base:noble

RUN apt-get update -y \
	&& apt-get upgrade -y \
	&& apt-get clean -y \
	&& apt-get distclean -y

USER vscode

# Update oh-my-zsh plugins and restore shell
RUN sed -i 's/plugins=(git)/plugins=(git npm nvm docker docker-compose)/' ~/.zshrc \
	&& echo 'source <(/usr/local/bin/bws completions zsh)' >> ~/.zshrc

# Set the default output for time [command] to be human readable
# Add aliases for often used commands to the environment.
RUN echo "TIMEFMT=$'time %J: %*E total'" >> ~/.zshrc \
	&& echo "alias px=\"pnpm exec\"" >> ~/.zshrc \
	&& echo "alias nx=\"pnpm exec nx\"" >> ~/.zshrc \
	&& echo "alias tsx=\"pnpm exec tsx\"" >> ~/.zshrc