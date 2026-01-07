import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixv")
export default class IxvController {
  @operation({
    summary: "Get Ixv",
  })
  @get()
  static getIxv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixv",
  })
  @post("{id}")
  static createIxv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
