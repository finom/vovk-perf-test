import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwg")
export default class IwgController {
  @operation({
    summary: "Get Iwg",
  })
  @get()
  static getIwg = procedure({
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
