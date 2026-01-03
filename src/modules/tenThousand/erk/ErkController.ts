import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erks")
export default class ErkController {
  @operation({
    summary: "Get Erks",
  })
  @get()
  static getErks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erk",
  })
  @post("{id}")
  static createErk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
