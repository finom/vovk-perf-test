import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzj")
export default class FzjController {
  @operation({
    summary: "Get Fzj",
  })
  @get()
  static getFzj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzj",
  })
  @post("{id}")
  static createFzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
