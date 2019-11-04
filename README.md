# alsatian-enzyme

This package provides helpers for testing React components in Typescript with Enzyme and Alsatian.

## Installation

```cmd
npm i alsatian-enzyme
```

## Usage

```tsx
import { Test, TestFixture } from "alsatian";
import { ExpectElement } from "alsatian-enzyme";
import { shallow } from "enzyme";

import { MyComponent } from "./MyComponent";

@TestFixture("MyComponent")
export class MyComponentTests {

    @Test("should render component")
    public shouldRenderComponent() {

        const wrapper = shallow(<MyComponent />);

        ExpectElement(wrapper).toMatchElement(
            <div>
                My components body.
            </div>
        );
    }

}
```
