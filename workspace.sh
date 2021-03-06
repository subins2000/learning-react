projectDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

subl "$projectDir/project.sublime-project"

thunar $projectDir &

xfce4-terminal -H \
    -T backend --working-directory=$projectDir -e 'env PROMPT_COMMAND="unset PROMPT_COMMAND; source bin/activate; python3 manage.py runserver;" bash' \
    --tab -T frontend --working-directory=$projectDir -e 'env PROMPT_COMMAND="unset PROMPT_COMMAND; source bin/activate; cd frontend && node_modules/.bin/webpack --config config/webpack.config.dev.js --watch;" bash' \
    --tab -T git --working-directory=$projectDir -e 'env PROMPT_COMMAND="unset PROMPT_COMMAND; source bin/activate;" bash'

nohup firefox 'http://127.0.0.1:8000/' > /dev/null &
