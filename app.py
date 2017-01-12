from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/sum', methods=['GET'])
def sum():
    try:
        a = int(request.args.get('a'))
        b = int(request.args.get('b'))
        if a >= 0 & a <= 99999 & b >= 0 & b <= 99999:
            output = {'result': a + b, 'success': True, 'message': 'success'}
        else:
            output = {'result': 0, 'success': False, 'message': 'error'}
    except ValueError as e:
        output = {'result': 0, 'success': False, 'message': e.message}
    except Exception as e:
        output = {'result': 0, 'success': False, 'message': e.message}

    return jsonify(output)


@app.route('/<path:path>')
def static_proxy(path):
    return app.send_static_file(path)


if __name__ == "__main__":
    app.run(debug=True)
