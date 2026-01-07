import { procedure, prefix, get, post, operation } from "vovk";

@prefix("def")
export default class DefController {
  @operation({
    summary: "Get Def",
  })
  @get()
  static getDef = procedure({
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
