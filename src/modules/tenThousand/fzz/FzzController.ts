import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzzes")
export default class FzzController {
  @operation({
    summary: "Get Fzzes",
  })
  @get()
  static getFzzes = procedure({
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
