import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eajs")
export default class EajController {
  @operation({
    summary: "Get Eajs",
  })
  @get()
  static getEajs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eaj",
  })
  @post("{id}")
  static createEaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
