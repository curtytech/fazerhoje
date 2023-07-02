import { appSchema } from "@nozbe/watermelondb";
import { tasksSchema } from "./tasksSchema";

export const schemas = appSchema({
    version: 1,
    tables: [
        tasksSchema
    ]
})