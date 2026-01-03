import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmvs")
export default class FmvController {
  @operation({
    summary: "Get Fmvs",
  })
  @get()
  static getFmvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmv",
  })
  @post("{id}")
  static createFmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
