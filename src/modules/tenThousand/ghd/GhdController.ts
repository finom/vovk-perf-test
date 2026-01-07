import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghd")
export default class GhdController {
  @operation({
    summary: "Get Ghd",
  })
  @get()
  static getGhd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghd",
  })
  @post("{id}")
  static createGhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
