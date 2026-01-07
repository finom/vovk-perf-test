import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmk")
export default class GmkController {
  @operation({
    summary: "Get Gmk",
  })
  @get()
  static getGmk = procedure({
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
