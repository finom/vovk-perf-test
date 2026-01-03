import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcgs")
export default class DcgController {
  @operation({
    summary: "Get Dcgs",
  })
  @get()
  static getDcgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcg",
  })
  @post("{id}")
  static createDcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
