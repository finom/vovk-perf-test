import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzfs")
export default class GzfController {
  @operation({
    summary: "Get Gzfs",
  })
  @get()
  static getGzfs = procedure({
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
