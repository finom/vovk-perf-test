import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgb")
export default class MgbController {
  @operation({
    summary: "Get Mgb",
  })
  @get()
  static getMgb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgb",
  })
  @post("{id}")
  static createMgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
