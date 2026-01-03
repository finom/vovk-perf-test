import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghis")
export default class GhiController {
  @operation({
    summary: "Get Ghis",
  })
  @get()
  static getGhis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghi",
  })
  @post("{id}")
  static createGhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
