import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzw")
export default class GzwController {
  @operation({
    summary: "Get Gzw",
  })
  @get()
  static getGzw = procedure({
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
