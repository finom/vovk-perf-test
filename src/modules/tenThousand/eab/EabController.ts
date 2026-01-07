import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eab")
export default class EabController {
  @operation({
    summary: "Get Eab",
  })
  @get()
  static getEab = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eab",
  })
  @post("{id}")
  static createEab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
