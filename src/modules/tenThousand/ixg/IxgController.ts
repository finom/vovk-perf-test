import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixg")
export default class IxgController {
  @operation({
    summary: "Get Ixg",
  })
  @get()
  static getIxg = procedure({
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
