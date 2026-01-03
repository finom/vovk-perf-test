import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzqs")
export default class FzqController {
  @operation({
    summary: "Get Fzqs",
  })
  @get()
  static getFzqs = procedure({
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
