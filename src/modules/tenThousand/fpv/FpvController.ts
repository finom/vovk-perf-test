import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpvs")
export default class FpvController {
  @operation({
    summary: "Get Fpvs",
  })
  @get()
  static getFpvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpv",
  })
  @post("{id}")
  static createFpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
