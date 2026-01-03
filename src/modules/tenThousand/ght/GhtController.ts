import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghts")
export default class GhtController {
  @operation({
    summary: "Get Ghts",
  })
  @get()
  static getGhts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ght",
  })
  @post("{id}")
  static createGht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
