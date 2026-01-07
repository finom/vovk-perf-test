import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gv")
export default class GvController {
  @operation({
    summary: "Get Gv",
  })
  @get()
  static getGv = procedure({
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
