import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzbs")
export default class GzbController {
  @operation({
    summary: "Get Gzbs",
  })
  @get()
  static getGzbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzb",
  })
  @post("{id}")
  static createGzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
