import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzhs")
export default class GzhController {
  @operation({
    summary: "Get Gzhs",
  })
  @get()
  static getGzhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzh",
  })
  @post("{id}")
  static createGzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
