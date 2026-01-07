import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzd")
export default class GzdController {
  @operation({
    summary: "Get Gzd",
  })
  @get()
  static getGzd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzd",
  })
  @post("{id}")
  static createGzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
