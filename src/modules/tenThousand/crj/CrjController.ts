import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crjs")
export default class CrjController {
  @operation({
    summary: "Get Crjs",
  })
  @get()
  static getCrjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crj",
  })
  @post("{id}")
  static createCrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
