import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxies")
export default class GxyController {
  @operation({
    summary: "Get Gxies",
  })
  @get()
  static getGxies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxy",
  })
  @post("{id}")
  static createGxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
