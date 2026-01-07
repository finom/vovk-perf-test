import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gly")
export default class GlyController {
  @operation({
    summary: "Get Gly",
  })
  @get()
  static getGly = procedure({
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
