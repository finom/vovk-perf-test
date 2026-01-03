import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzs")
export default class FzsController {
  @operation({
    summary: "Get Fzs",
  })
  @get()
  static getFzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzs",
  })
  @post("{id}")
  static createFzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
