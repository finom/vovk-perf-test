import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvs")
export default class BvsController {
  @operation({
    summary: "Get Bvs",
  })
  @get()
  static getBvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvs",
  })
  @post("{id}")
  static createBvs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
