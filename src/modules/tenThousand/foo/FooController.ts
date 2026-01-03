import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foos")
export default class FooController {
  @operation({
    summary: "Get Foos",
  })
  @get()
  static getFoos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Foo",
  })
  @post("{id}")
  static createFoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
