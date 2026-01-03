import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhvs")
export default class BhvController {
  @operation({
    summary: "Get Bhvs",
  })
  @get()
  static getBhvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhv",
  })
  @post("{id}")
  static createBhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
