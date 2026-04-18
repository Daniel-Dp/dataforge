from flask import Blueprint, render_template

main_bp = Blueprint('main', __name__)


@main_bp.route('/')
def index():
    """Landing page principal."""
    return render_template('index.html')


# ── Aquí agregas nuevas rutas cuando el proyecto crezca ──
#
# Ejemplo futuro — blog:
# @main_bp.route('/blog')
# def blog():
#     return render_template('blog/index.html')
#
# Ejemplo futuro — contacto con BD:
# @main_bp.route('/contacto', methods=['POST'])
# def contacto():
#     ...
