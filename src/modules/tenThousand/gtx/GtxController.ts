import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtxes")
export default class GtxController {
  @operation({
    summary: "Get Gtxes",
  })
  @get()
  static getGtxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtx",
  })
  @post("{id}")
  static createGtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
