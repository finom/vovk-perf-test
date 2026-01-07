import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmv")
export default class FmvController {
  @operation({
    summary: "Get Fmv",
  })
  @get()
  static getFmv = procedure({
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
