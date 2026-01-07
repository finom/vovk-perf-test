import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbe")
export default class CbeController {
  @operation({
    summary: "Get Cbe",
  })
  @get()
  static getCbe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbe",
  })
  @post("{id}")
  static createCbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
