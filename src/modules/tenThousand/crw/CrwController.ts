import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crw")
export default class CrwController {
  @operation({
    summary: "Get Crw",
  })
  @get()
  static getCrw = procedure({
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
