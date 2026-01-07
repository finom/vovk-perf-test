import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmg")
export default class FmgController {
  @operation({
    summary: "Get Fmg",
  })
  @get()
  static getFmg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmg",
  })
  @post("{id}")
  static createFmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
