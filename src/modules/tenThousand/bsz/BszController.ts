import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bszs")
export default class BszController {
  @operation({
    summary: "Get Bszs",
  })
  @get()
  static getBszs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsz",
  })
  @post("{id}")
  static createBsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
