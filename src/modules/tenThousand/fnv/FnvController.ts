import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnvs")
export default class FnvController {
  @operation({
    summary: "Get Fnvs",
  })
  @get()
  static getFnvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnv",
  })
  @post("{id}")
  static createFnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
