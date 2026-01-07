import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzh")
export default class GzhController {
  @operation({
    summary: "Get Gzh",
  })
  @get()
  static getGzh = procedure({
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
