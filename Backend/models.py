# Recipe List

from config import db 
import json

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))
    ingredients = db.Column(db.Text)
    instructions = db.Column(db.Text)
    steps = db.Column(db.Text)  # Stored as JSON string

    def get_steps(self):
        if self.steps:
            return json.loads(self.steps)
        return []
    
    def set_steps(self, steps_list):
        if isinstance(steps_list, list):
            self.steps = json.dumps(steps_list)
        else:
            self.steps = json.dumps([])

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "ingredients": self.ingredients,
            "instructions": self.instructions,
            "steps": self.get_steps()
        }
    
class Steps(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    step_number = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'), nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "step_number": self.step_number,
            "description": self.description,
            "recipe_id": self.recipe_id
        }