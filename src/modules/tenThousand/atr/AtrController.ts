import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atr")
export default class AtrController {
  @operation({
    summary: "Get Atr",
  })
  @get()
  static getAtr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atr",
  })
  @post("{id}")
  static createAtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
