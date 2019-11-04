import { Expect, Test, TestFixture } from "alsatian";

import { dummy } from "./dummy";

@TestFixture("Dummy")
export class DummyTests {

    @Test("should return true")
    public shouldReturnTrue() {
        Expect(dummy()).toBeTruthy();
    }
}
