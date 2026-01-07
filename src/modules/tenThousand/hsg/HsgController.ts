import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsg")
export default class HsgController {
  @operation({
    summary: "Get Hsg",
  })
  @get()
  static getHsg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsg",
  })
  @post("{id}")
  static createHsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
