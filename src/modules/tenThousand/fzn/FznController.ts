import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzns")
export default class FznController {
  @operation({
    summary: "Get Fzns",
  })
  @get()
  static getFzns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzn",
  })
  @post("{id}")
  static createFzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
