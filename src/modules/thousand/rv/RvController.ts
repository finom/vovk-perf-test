import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rvs")
export default class RvController {
  @operation({
    summary: "Get Rvs",
  })
  @get()
  static getRvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rv",
  })
  @post("{id}")
  static createRv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
