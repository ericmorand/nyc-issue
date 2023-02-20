import * as tape from "tape";
import {foo} from "../src/foo";

tape('foo', ({same, end}) => {
    same(foo(1), 1);

    end();
});