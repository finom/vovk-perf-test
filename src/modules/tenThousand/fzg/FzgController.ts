import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzgs")
export default class FzgController {
  @operation({
    summary: "Get Fzgs",
  })
  @get()
  static getFzgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzg",
  })
  @post("{id}")
  static createFzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
