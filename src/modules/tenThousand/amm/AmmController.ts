import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amms")
export default class AmmController {
  @operation({
    summary: "Get Amms",
  })
  @get()
  static getAmms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amm",
  })
  @post("{id}")
  static createAmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
