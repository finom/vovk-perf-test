import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzks")
export default class FzkController {
  @operation({
    summary: "Get Fzks",
  })
  @get()
  static getFzks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzk",
  })
  @post("{id}")
  static createFzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
