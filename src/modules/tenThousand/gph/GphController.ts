import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gphs")
export default class GphController {
  @operation({
    summary: "Get Gphs",
  })
  @get()
  static getGphs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gph",
  })
  @post("{id}")
  static createGph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
