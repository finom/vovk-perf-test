import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chv")
export default class ChvController {
  @operation({
    summary: "Get Chv",
  })
  @get()
  static getChv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chv",
  })
  @post("{id}")
  static createChv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
