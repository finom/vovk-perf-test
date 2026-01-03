import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wvs")
export default class WvController {
  @operation({
    summary: "Get Wvs",
  })
  @get()
  static getWvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wv",
  })
  @post("{id}")
  static createWv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
