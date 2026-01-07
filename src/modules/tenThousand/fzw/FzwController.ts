import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzw")
export default class FzwController {
  @operation({
    summary: "Get Fzw",
  })
  @get()
  static getFzw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzw",
  })
  @post("{id}")
  static createFzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
