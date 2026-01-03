import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggns")
export default class GgnController {
  @operation({
    summary: "Get Ggns",
  })
  @get()
  static getGgns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggn",
  })
  @post("{id}")
  static createGgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
