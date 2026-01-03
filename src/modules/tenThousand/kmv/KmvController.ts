import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmvs")
export default class KmvController {
  @operation({
    summary: "Get Kmvs",
  })
  @get()
  static getKmvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmv",
  })
  @post("{id}")
  static createKmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
