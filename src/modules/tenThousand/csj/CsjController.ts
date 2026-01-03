import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csjs")
export default class CsjController {
  @operation({
    summary: "Get Csjs",
  })
  @get()
  static getCsjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csj",
  })
  @post("{id}")
  static createCsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
