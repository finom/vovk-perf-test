import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lszs")
export default class LszController {
  @operation({
    summary: "Get Lszs",
  })
  @get()
  static getLszs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsz",
  })
  @post("{id}")
  static createLsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
