import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmds")
export default class GmdController {
  @operation({
    summary: "Get Gmds",
  })
  @get()
  static getGmds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmd",
  })
  @post("{id}")
  static createGmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
