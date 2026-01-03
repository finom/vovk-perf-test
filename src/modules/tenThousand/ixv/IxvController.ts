import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixvs")
export default class IxvController {
  @operation({
    summary: "Get Ixvs",
  })
  @get()
  static getIxvs = procedure({
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
