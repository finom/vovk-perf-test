import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzr")
export default class GzrController {
  @operation({
    summary: "Get Gzr",
  })
  @get()
  static getGzr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzr",
  })
  @post("{id}")
  static createGzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
