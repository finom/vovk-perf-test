import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzws")
export default class GzwController {
  @operation({
    summary: "Get Gzws",
  })
  @get()
  static getGzws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzw",
  })
  @post("{id}")
  static createGzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
