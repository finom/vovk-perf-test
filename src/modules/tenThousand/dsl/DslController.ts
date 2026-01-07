import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsl")
export default class DslController {
  @operation({
    summary: "Get Dsl",
  })
  @get()
  static getDsl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsl",
  })
  @post("{id}")
  static createDsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
