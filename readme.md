# Example Chat Interface

This command line based chatbot will advise you on whether an Azure Service has been approved in your organisation.

This 'Copilot' demonstrates how the data in the LLM can be augmented 
customer-specific data to provide a more personalised experience.

The list of services is maintained int the `azure-services.txt` file.

## Installation

1. Install [node.js](https://nodejs.org/en)

2. Install the node modules

```
$ npm install
```

3. Create a `.env` file in the root of the project and add the following (replacing the XXX, YYY, ZZZ with your values):

```
OPEN_AI_ENDPOINT=https://XXX.openai.azure.com/openai/deployments/YYY/chat/completions?api-version=2023-07-01-preview
OPEN_AI_KEY=ZZZ
```

## Usage

To start the app, type:

```
$ node index.js
```

Then ask questions at the prompt, i.e.

```
 => which container services can i use?
You can use the following container services in Azure:

1. Azure Container Instances
2. Azure Container Registry
3. AKS (Azure Kubernetes Service)
4. Azure Container Apps

Please note that these services are subject to approval and compliance with your organization's policies.
```

## License

MIT