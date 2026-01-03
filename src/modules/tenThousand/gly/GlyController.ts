import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glies")
export default class GlyController {
  @operation({
    summary: "Get Glies",
  })
  @get()
  static getGlies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gly",
  })
  @post("{id}")
  static createGly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
