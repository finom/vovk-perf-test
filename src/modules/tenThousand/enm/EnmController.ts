import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enm")
export default class EnmController {
  @operation({
    summary: "Get Enm",
  })
  @get()
  static getEnm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enm",
  })
  @post("{id}")
  static createEnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
