import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixgs")
export default class IxgController {
  @operation({
    summary: "Get Ixgs",
  })
  @get()
  static getIxgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixg",
  })
  @post("{id}")
  static createIxg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
