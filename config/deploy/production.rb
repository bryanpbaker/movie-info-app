server '104.131.38.234', user: "deploy", roles: %w{app}

set :branch, "master"
set :deploy_to, "/var/www/movieinfo.online/html"

set :ssh_options, {
  forward_agent: true,
}

namespace :deploy do
   task :npm_start do
     on roles :all do
     execute "cd /var/www/movieinfo.online/html/current npm start"
     end
   end
   after :updated, :config_file
end
