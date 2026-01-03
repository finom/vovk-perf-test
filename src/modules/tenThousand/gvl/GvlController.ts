import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvls")
export default class GvlController {
  @operation({
    summary: "Get Gvls",
  })
  @get()
  static getGvls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvl",
  })
  @post("{id}")
  static createGvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
