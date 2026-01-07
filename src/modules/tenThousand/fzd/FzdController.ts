import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzd")
export default class FzdController {
  @operation({
    summary: "Get Fzd",
  })
  @get()
  static getFzd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzd",
  })
  @post("{id}")
  static createFzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
