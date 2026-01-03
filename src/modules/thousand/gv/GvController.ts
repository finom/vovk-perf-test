import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvs")
export default class GvController {
  @operation({
    summary: "Get Gvs",
  })
  @get()
  static getGvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gv",
  })
  @post("{id}")
  static createGv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
