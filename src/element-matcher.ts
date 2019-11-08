import { ReactElement } from "react";
import { CommonWrapper, shallow, ShallowWrapper, ReactWrapper } from "enzyme";
import { Matcher, MatchError, Expect } from "alsatian";
import { diff } from "alsatian/dist/core/matchers/diff";

export class ElementMatcher<T extends CommonWrapper> extends Matcher<T> {

    public toMatchElement(node: ReactElement<any>) {

        if (!this.actualValue.matchesElement(node)) {

            let expected;
            let actual;
            try {
                expected = shallow(node).debug();
                actual = this.actualValue.debug();
            } catch {
                // If the calls to shallow or debug fail then we still want the MatchError to be thrown
                // so perform the diff over the react elements directly instead as a compromise
                expected = node;
                actual = this.actualValue.getElement();
            }

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
