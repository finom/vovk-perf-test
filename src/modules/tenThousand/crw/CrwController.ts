import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crws")
export default class CrwController {
  @operation({
    summary: "Get Crws",
  })
  @get()
  static getCrws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crw",
  })
  @post("{id}")
  static createCrw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
