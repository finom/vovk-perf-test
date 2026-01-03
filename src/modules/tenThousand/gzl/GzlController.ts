import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzls")
export default class GzlController {
  @operation({
    summary: "Get Gzls",
  })
  @get()
  static getGzls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzl",
  })
  @post("{id}")
  static createGzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
