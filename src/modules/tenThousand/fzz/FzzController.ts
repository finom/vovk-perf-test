import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzz")
export default class FzzController {
  @operation({
    summary: "Get Fzz",
  })
  @get()
  static getFzz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzz",
  })
  @post("{id}")
  static createFzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
