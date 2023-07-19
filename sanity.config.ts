import {defineConfig} from 'sanity';
import {deskTool} from "sanity/desk";
import schemas from './sanity/schemas';

export const config = defineConfig( {
    projectId: "m93bclbm",

    dataset: "production",

    title: "My Website",

    apiVersion: "2023-07-10",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: { types: schemas }

});