import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmns")
export default class FmnController {
  @operation({
    summary: "Get Fmns",
  })
  @get()
  static getFmns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmn",
  })
  @post("{id}")
  static createFmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
