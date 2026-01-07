import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzh")
export default class FzhController {
  @operation({
    summary: "Get Fzh",
  })
  @get()
  static getFzh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzh",
  })
  @post("{id}")
  static createFzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
