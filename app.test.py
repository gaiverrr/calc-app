from app import app

import os
import json
import unittest
import tempfile


class AppTestCase(unittest.TestCase):
    def test_sum(self):
        tester = app.test_client(self)
        response = tester.get('/sum?a=1&b=9', content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.data), {'message': 'success', 'result': 10, 'success': True})

    def test_invalid_data(self):
        tester = app.test_client(self)
        response = tester.get('/sum?a=-1&b=dddd', content_type='application/json')
        self.assertEqual(response.status_code, 200)
        result = json.loads(response.data)
        self.assertEqual(result.get('success'), False)
        self.assertEqual(result.get('result'), 0)


if __name__ == '__main__':
    unittest.main()
