import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzq")
export default class FzqController {
  @operation({
    summary: "Get Fzq",
  })
  @get()
  static getFzq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzq",
  })
  @post("{id}")
  static createFzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
