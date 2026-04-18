from flask import Flask


def create_app(config_name: str = 'development'):
    app = Flask(__name__)

    # Cargar configuración
    from config import config
    app.config.from_object(config[config_name])

    # Registrar rutas
    from app.routes import main_bp
    app.register_blueprint(main_bp)

    return app
