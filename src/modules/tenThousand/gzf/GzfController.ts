import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzf")
export default class GzfController {
  @operation({
    summary: "Get Gzf",
  })
  @get()
  static getGzf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzf",
  })
  @post("{id}")
  static createGzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
