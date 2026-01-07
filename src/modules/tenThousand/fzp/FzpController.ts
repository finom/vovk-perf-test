import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzp")
export default class FzpController {
  @operation({
    summary: "Get Fzp",
  })
  @get()
  static getFzp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzp",
  })
  @post("{id}")
  static createFzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
