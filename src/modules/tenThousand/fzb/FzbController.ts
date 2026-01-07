import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzb")
export default class FzbController {
  @operation({
    summary: "Get Fzb",
  })
  @get()
  static getFzb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzb",
  })
  @post("{id}")
  static createFzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
