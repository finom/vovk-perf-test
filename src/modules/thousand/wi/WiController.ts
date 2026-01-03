import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wis")
export default class WiController {
  @operation({
    summary: "Get Wis",
  })
  @get()
  static getWis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wi",
  })
  @post("{id}")
  static createWi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
