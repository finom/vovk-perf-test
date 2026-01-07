import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzn")
export default class FznController {
  @operation({
    summary: "Get Fzn",
  })
  @get()
  static getFzn = procedure({
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
