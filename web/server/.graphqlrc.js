import fs from 'node:fs';
import { LATEST_API_VERSION } from "@shopify/shopify-api";

function getConfig() {
    const config = {
        projects: {
            shopifyAdminApi: {
                schema: `https://shopify.dev/admin-graphql-direct-proxy/${LATEST_API_VERSION}`,
                documents: ['./src/**/*.{graphql,js,ts,jsx,tsx}']
            }
        }
    }

    let extensions = []
    try {
        extensions = fs.readdirSync('./extensions');
    } catch {
        // ignore if no extensions
    }

    for (const entry of extensions) {
        const extensionPath = `./extensions/${entry}`;
        const schema = `${extensionPath}/schema.graphql`;
        if(!fs.existsSync(schema)) {
            continue;
        }
        config.projects[entry] = {
            schema,
            documents: [`${extensionPath}/input.graphql`]
        }
    }

    return config;
}

export default getConfig();
