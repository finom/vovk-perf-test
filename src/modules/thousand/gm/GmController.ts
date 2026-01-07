import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gm")
export default class GmController {
  @operation({
    summary: "Get Gm",
  })
  @get()
  static getGm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gm",
  })
  @post("{id}")
  static createGm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
