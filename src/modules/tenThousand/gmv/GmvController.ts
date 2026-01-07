import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmv")
export default class GmvController {
  @operation({
    summary: "Get Gmv",
  })
  @get()
  static getGmv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmv",
  })
  @post("{id}")
  static createGmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
