import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghb")
export default class GhbController {
  @operation({
    summary: "Get Ghb",
  })
  @get()
  static getGhb = procedure({
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
