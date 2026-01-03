import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghbs")
export default class GhbController {
  @operation({
    summary: "Get Ghbs",
  })
  @get()
  static getGhbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghb",
  })
  @post("{id}")
  static createGhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
