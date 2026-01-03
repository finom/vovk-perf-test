import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eabs")
export default class EabController {
  @operation({
    summary: "Get Eabs",
  })
  @get()
  static getEabs = procedure({
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
