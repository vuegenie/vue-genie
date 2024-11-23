<p align="center">
    <img src="./docs/img/vue-genie-logo.svg" width="200" title="Go to website">
</p>

# VueGenie

VueGenie is a lightweight, agnostic Vue.js framework designed to provide out-of-the-box UI components, such as forms and data tables, with minimal configuration. It is built with flexibility in mind, so you can easily customize it to suit your needs, whether you're using Vuetify or any other UI library, or even without any UI library at all.

## Features

Agnostic Components: Designed to be flexible and compatible with any UI framework.
Out-of-the-box UI: Includes pre-built form and data-table components for quick integration.
Vue 3 Support: Built with Vue 3 for modern features and optimized performance.
Customizable: Easily extend and customize components to fit your project’s requirements.

## Installation

You can install VueGenie via npm or yarn.

### npm

```bash
npm install vue-genie
```

### yarn

```bash
yarn add vue-genie
```

## Usage

After installation, you can start using VueGenie components in your project.

Import VueGenie components into your Vue component:

```vue
<script>
import { GenieForm, GenieTable } from "vue-genie";

export default {
  components: {
    GenieForm,
    GenieTable,
  },
};
</script>
```

Use the components in your template:

```vue
<template>
  <div>
    <GenieForm :formData="formData" />
    <GenieTable :tableData="tableData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: { name: "", email: "" },
      tableData: [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
      ],
    };
  },
};
</script>
```

## Documentation

VueGenie is designed to be intuitive and flexible. Full documentation will be added soon to guide you through all the available components, configurations, and customization options.

## Development

### Prerequisites

Ensure you have the following installed:

Node.js (v23 or above)
npm or yarn

## Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/vue-genie.git
cd vue-genie
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

## Building for Production

To build the library for production:

```bash
npm run build
```

This will create optimized bundles in the dist/ folder.

## Contributing

Contributions are welcome! If you have any ideas or improvements, please open an issue or submit a pull request.

Please follow the code style guidelines and include tests where applicable.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
