import React from "react";

interface Recipe {
    id: number;
    name: string;
    description: string;
    ingredients: string;
    instructions: string;
    steps: string[];
}

interface RecipeListProps {
    recipes?: Recipe[];
    updateRecipe?: (recipe: Recipe) => void;
    updateCallback?: () => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes = [], updateRecipe, updateCallback }) => {
    const onDelete = async (id: number) => {
        try {
            const options = { method: 'DELETE' };
            const response = await fetch(`http://127.0.0.1:5000/recipes/${id}`, options);
            if (response.status === 200 || response.status === 204) {
                updateCallback && updateCallback();
            } else {
                console.error("Failed to delete recipe");
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <h2>Recipe List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe) => (
                        <tr key={recipe.id}>
                            <td>{recipe.name}</td>
                            <td>{recipe.description}</td>
                            <td>{recipe.ingredients}</td>
                            <td>{recipe.instructions}</td>
                            <td>
                                <button onClick={() => updateRecipe && updateRecipe(recipe)}>Edit</button>
                                <button onClick={() => onDelete(recipe.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default RecipeList;