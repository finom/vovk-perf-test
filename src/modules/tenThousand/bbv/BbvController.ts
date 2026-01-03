import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbvs")
export default class BbvController {
  @operation({
    summary: "Get Bbvs",
  })
  @get()
  static getBbvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbv",
  })
  @post("{id}")
  static createBbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
