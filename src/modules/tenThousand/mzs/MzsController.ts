import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzs")
export default class MzsController {
  @operation({
    summary: "Get Mzs",
  })
  @get()
  static getMzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzs",
  })
  @post("{id}")
  static createMzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
