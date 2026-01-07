import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eic")
export default class EicController {
  @operation({
    summary: "Get Eic",
  })
  @get()
  static getEic = procedure({
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
