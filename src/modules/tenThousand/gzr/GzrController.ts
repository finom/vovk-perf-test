import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzrs")
export default class GzrController {
  @operation({
    summary: "Get Gzrs",
  })
  @get()
  static getGzrs = procedure({
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
