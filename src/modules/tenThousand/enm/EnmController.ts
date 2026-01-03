import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enms")
export default class EnmController {
  @operation({
    summary: "Get Enms",
  })
  @get()
  static getEnms = procedure({
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
