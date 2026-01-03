import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzvs")
export default class GzvController {
  @operation({
    summary: "Get Gzvs",
  })
  @get()
  static getGzvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzv",
  })
  @post("{id}")
  static createGzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
