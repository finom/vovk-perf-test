import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsgs")
export default class GsgController {
  @operation({
    summary: "Get Gsgs",
  })
  @get()
  static getGsgs = procedure({
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
