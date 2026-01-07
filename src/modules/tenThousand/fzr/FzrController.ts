import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzr")
export default class FzrController {
  @operation({
    summary: "Get Fzr",
  })
  @get()
  static getFzr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzr",
  })
  @post("{id}")
  static createFzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
