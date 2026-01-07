import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsg")
export default class GsgController {
  @operation({
    summary: "Get Gsg",
  })
  @get()
  static getGsg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsg",
  })
  @post("{id}")
  static createGsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
