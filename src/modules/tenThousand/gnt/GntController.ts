import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnts")
export default class GntController {
  @operation({
    summary: "Get Gnts",
  })
  @get()
  static getGnts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnt",
  })
  @post("{id}")
  static createGnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
