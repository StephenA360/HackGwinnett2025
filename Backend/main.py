from flask import jsonify, request
from config import app, db
from models import Recipe

# Create database tables
with app.app_context():
    db.create_all()

@app.route('/recipes', methods=['GET'])
def get_recipes():
    recipes = Recipe.query.all()
    return {"recipes": [recipe.to_json() for recipe in recipes]}

@app.route('/recipes/<int:recipe_id>', methods=['GET'])
def get_recipe(recipe_id):
    recipe = Recipe.query.get_or_404(recipe_id)
    return recipe.to_json()

@app.route('/recipes', methods=['POST'])
def add_recipe():
    data = request.get_json()
    new_recipe = Recipe(
        name=data['name'],
        description=data.get('description', ''),
        ingredients=data.get('ingredients', ''),
        instructions=data.get('instructions', '')
    )
    # Handle steps array
    if 'steps' in data:
        new_recipe.set_steps(data['steps'])
    
    db.session.add(new_recipe)
    db.session.commit()
    return new_recipe.to_json(), 201

@app.route('/recipes/<int:recipe_id>', methods=['PUT'])
def update_recipe(recipe_id):
    recipe = Recipe.query.get_or_404(recipe_id)
    data = request.get_json()
    recipe.name = data.get('name', recipe.name)
    recipe.description = data.get('description', recipe.description)
    recipe.ingredients = data.get('ingredients', recipe.ingredients)
    recipe.instructions = data.get('instructions', recipe.instructions)
    
    # Handle steps array
    if 'steps' in data:
        recipe.set_steps(data['steps'])
    
    db.session.commit()
    return recipe.to_json()

@app.route('/recipes/<int:recipe_id>', methods=['DELETE'])
def delete_recipe(recipe_id):
    recipe = Recipe.query.get_or_404(recipe_id)
    db.session.delete(recipe)
    db.session.commit()
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)