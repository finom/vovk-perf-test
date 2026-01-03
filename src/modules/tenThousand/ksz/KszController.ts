import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kszs")
export default class KszController {
  @operation({
    summary: "Get Kszs",
  })
  @get()
  static getKszs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksz",
  })
  @post("{id}")
  static createKsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
