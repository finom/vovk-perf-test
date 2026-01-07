import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzv")
export default class FzvController {
  @operation({
    summary: "Get Fzv",
  })
  @get()
  static getFzv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzv",
  })
  @post("{id}")
  static createFzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
