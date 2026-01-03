import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwgs")
export default class IwgController {
  @operation({
    summary: "Get Iwgs",
  })
  @get()
  static getIwgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwg",
  })
  @post("{id}")
  static createIwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
