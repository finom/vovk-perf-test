import { procedure, prefix, get, post, operation } from "vovk";

@prefix("defs")
export default class DefController {
  @operation({
    summary: "Get Defs",
  })
  @get()
  static getDefs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Def",
  })
  @post("{id}")
  static createDef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
