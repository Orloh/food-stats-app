import fs from 'fs/promises';
import path from 'path';

export class JsonDatabase {
    constructor(filename) {
        this.filePath = path.resolve(filename);
        this.defaultStructure = {};
    }

    async initialize() {
        try {
            //Ensure the directory exists
            const dirPath = path.dirname(this.filePath);
            await fs.mkdir(dirPath, { recursive: true });
            
            // Ensure file exists with empty object
            try {
                await fs.access(this.filePath);
            } catch {
                await fs.writeFile(this.filePath, JSON.stringify(this.defaultStructure, null, 2));
            }
        } catch (error) {
           throw new Error(`Failed to initialize database: ${error.message}`); 
        }
    }

    async read() {
        try {
            const fileData = await fs.readFile(this.filePath, "utf8");
            return JSON.parse(fileData);
        } catch (error) {
            if(error.code === 'ENOENT') {
                return this.defaultStructure;
            } else {
                throw new Error(`Failed to read data from database: ${error.message}`);
            }
        }
    }

    async write(data) {
        try {
            await fs.writeFile(this.filePath, JSON.stringify(data, null, 2));
        } catch (error) {
            throw new Error(`Failed to write data to database: ${error.message}`);
        }
    }
}

