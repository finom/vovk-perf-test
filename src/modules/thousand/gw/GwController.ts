import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gw")
export default class GwController {
  @operation({
    summary: "Get Gw",
  })
  @get()
  static getGw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gw",
  })
  @post("{id}")
  static createGw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
