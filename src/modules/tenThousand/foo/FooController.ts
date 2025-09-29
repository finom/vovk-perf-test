import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("foos")
export default class FooController {
  @operation({
    summary: "Get Foos",
  })
  @get()
  static getFoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Foo",
  })
  @post("{id}")
  static createFoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
