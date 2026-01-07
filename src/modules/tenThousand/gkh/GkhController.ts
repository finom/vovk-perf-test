import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkh")
export default class GkhController {
  @operation({
    summary: "Get Gkh",
  })
  @get()
  static getGkh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkh",
  })
  @post("{id}")
  static createGkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
