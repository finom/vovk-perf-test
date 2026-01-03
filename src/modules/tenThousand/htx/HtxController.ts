import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htxes")
export default class HtxController {
  @operation({
    summary: "Get Htxes",
  })
  @get()
  static getHtxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htx",
  })
  @post("{id}")
  static createHtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
