import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itms")
export default class ItmController {
  @operation({
    summary: "Get Itms",
  })
  @get()
  static getItms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itm",
  })
  @post("{id}")
  static createItm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
