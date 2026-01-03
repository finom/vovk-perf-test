import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzfs")
export default class FzfController {
  @operation({
    summary: "Get Fzfs",
  })
  @get()
  static getFzfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzf",
  })
  @post("{id}")
  static createFzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
