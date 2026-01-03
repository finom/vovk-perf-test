import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmks")
export default class GmkController {
  @operation({
    summary: "Get Gmks",
  })
  @get()
  static getGmks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmk",
  })
  @post("{id}")
  static createGmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
