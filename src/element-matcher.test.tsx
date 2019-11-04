import * as React from "react";
import { Expect, Test, TestFixture, MatchError } from "alsatian";
import { configure, shallow, ShallowWrapper } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import { ElementMatcher, ExpectElement } from "./element-matcher";

const MyComponent: React.FC = () => (
    <div>
        My components body.
    </div>
);

@TestFixture("ElementMatcher")
export class ElementMatcherTests {

    @Test("should throw match error if components do not match")
    public shouldThrowMatchError() {

        const wrapper = shallow(<MyComponent />);

        const elementMatcher = new ElementMatcher<ShallowWrapper>(wrapper);

        Expect(() => elementMatcher.toMatchElement(<span>something</span>)).toThrowError(MatchError, "Expected elements to match");
    }

    @Test("should throw match error if components do not match with ExpectElement")
    public shouldThrowWithExpectElement() {

        const wrapper = shallow(<MyComponent />);

        Expect(() => ExpectElement(wrapper).toMatchElement(<span>something</span>)).toThrowError(MatchError, "Expected elements to match");
    }

    @Test("should not throw with matching elements")
    public shouldNotThrowWithMatchingElements() {

        const wrapper = shallow(<MyComponent />);

        const elementMatcher = new ElementMatcher<ShallowWrapper>(wrapper);

        Expect(() => elementMatcher.toMatchElement(<div>My components body.</div>)).not.toThrow();
    }
}
