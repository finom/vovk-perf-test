import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atrs")
export default class AtrController {
  @operation({
    summary: "Get Atrs",
  })
  @get()
  static getAtrs = procedure({
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
