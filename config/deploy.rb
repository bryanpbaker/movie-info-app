# config valid only for Capistrano 3.1
lock '>=3.2.1'

set :application, 'movieinfo.online'
set :repo_url, 'git@github.com:bryanpbaker/movie-info-app.git'

# set :linked_dirs, %w{wp-content/uploads wp-content/plugins/all-in-one-wp-migration/storage}
# set :linked_files, %w{wp-config.php}
desc 'Locally build the static site'
task :build_static do
  run_locally do
    within 'static' do
      execute :webpack, 'npm start'
    end
  end
end

desc 'Upload the static site'
task :upload_static do
  on roles(:app) do
    upload! 'static/dist', release_path.join('static'), recursive: true
  end
end

before :check, :build_static
after :updated, :upload_static
