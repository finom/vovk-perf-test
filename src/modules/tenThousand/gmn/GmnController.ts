import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmns")
export default class GmnController {
  @operation({
    summary: "Get Gmns",
  })
  @get()
  static getGmns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmn",
  })
  @post("{id}")
  static createGmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
