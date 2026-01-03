import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzjs")
export default class GzjController {
  @operation({
    summary: "Get Gzjs",
  })
  @get()
  static getGzjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzj",
  })
  @post("{id}")
  static createGzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
