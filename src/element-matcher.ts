import { ReactElement } from "react";
import { CommonWrapper, shallow, ShallowWrapper, ReactWrapper } from "enzyme";
import { Matcher, MatchError, Expect } from "alsatian";
import { diff } from "alsatian/dist/core/matchers/diff";

export class ElementMatcher<T extends CommonWrapper> extends Matcher<T> {

    public toMatchElement(node: ReactElement<any>) {

        if (!this.actualValue.matchesElement(node)) {

            const expected = shallow(node).debug();
            const actual = this.actualValue.debug();

            throw new MatchError(
                "Expected elements to match",
                expected,
                actual,
                {
                    diff: diff(expected, actual)
                });
        }
    }
}

// tslint:disable: max-classes-per-file
class ShallowMatcher extends ElementMatcher<ShallowWrapper> {}
class ReactMatcher extends ElementMatcher<ReactWrapper> {}

export const ExpectElement = Expect
    .extend(ShallowWrapper, ShallowMatcher)
    .extend(ReactWrapper, ReactMatcher);
