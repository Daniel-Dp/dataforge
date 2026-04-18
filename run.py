import os
from app import create_app

# Lee el entorno desde la variable de sistema (development | production)
env = os.environ.get('FLASK_ENV', 'development')
app = create_app(env)

if __name__ == '__main__':
    # Solo para desarrollo local — en producción usa gunicorn
    app.run(debug=(env == 'development'), host='0.0.0.0', port=5000)
