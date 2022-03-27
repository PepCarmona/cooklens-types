import { PaginatedResponse } from './PaginationTypes';
import { UserInfo } from './UserTypes';

export interface SearchQuery {
	type: SearchType;
	text: string;
}

export type SearchType = 'title' | 'ingredient' | 'tag';

export interface PaginatedRecipes extends PaginatedResponse {
	result: DatabaseRecipe[];
}
export interface IntegratedSite {
	name: string;
	url: string;
}

export interface RecipeTime {
	preparation?: number;
	cooking: number;
}

export interface Ingredient {
	_id?: string;
	quantity?: number;
	units?: string;
	name: string;
}

export interface Step {
	_id?: string;
	position: number;
	content: string;
}

export interface Tag {
	_id?: string;
	value: string;
}
interface BaseRecipe {
	_id?: string;
	url?: string;
	title: string;
	description?: string;
	time?: RecipeTime;
	servings: number;
	ingredients: Ingredient[];
	instructions: Step[];
	tags: Tag[];
	images?: string[];
	rating: number;
	isIntegrated?: boolean;
}

export interface DatabaseRecipe extends BaseRecipe {
	author?: string;
}

export interface DatabaseRecipeWithPopulatedAuthor extends BaseRecipe {
	author?: UserInfo;
}

export interface ClientRecipe extends BaseRecipe {
	authorId?: string;
	authorDetails?: UserInfo;
}

export class RecipeTimeClass implements RecipeTime {
	preparation: number;
	cooking: number;
	constructor() {
		this.preparation = 0;
		this.cooking = 5;
	}
}

export class IngredientClass implements Ingredient {
	quantity?: number;
	units?: string;
	name: string;
	constructor() {
		this.quantity = 0;
		this.units = '';
		this.name = '';
	}
}

export class StepClass implements Step {
	position: number;
	content: string;
	constructor() {
		this.position = 1;
		this.content = '';
	}
}

export class TagClass implements Tag {
	value: string;
	constructor() {
		this.value = '';
	}
}

export class RecipeClass implements BaseRecipe {
	title: string;
	description?: string;
	time?: RecipeTime;
	servings: number;
	ingredients: Ingredient[];
	instructions: Step[];
	tags: Tag[];
	rating: number;
	constructor() {
		this.title = '';
		this.servings = 4;
		this.ingredients = [new IngredientClass()];
		this.instructions = [new StepClass()];
		this.tags = [];
		this.rating = 0;
	}
}
