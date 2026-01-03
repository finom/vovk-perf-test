import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knts")
export default class KntController {
  @operation({
    summary: "Get Knts",
  })
  @get()
  static getKnts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knt",
  })
  @post("{id}")
  static createKnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
