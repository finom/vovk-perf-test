import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eics")
export default class EicController {
  @operation({
    summary: "Get Eics",
  })
  @get()
  static getEics = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eic",
  })
  @post("{id}")
  static createEic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
