import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixks")
export default class IxkController {
  @operation({
    summary: "Get Ixks",
  })
  @get()
  static getIxks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixk",
  })
  @post("{id}")
  static createIxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
