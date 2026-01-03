import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvts")
export default class GvtController {
  @operation({
    summary: "Get Gvts",
  })
  @get()
  static getGvts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvt",
  })
  @post("{id}")
  static createGvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
