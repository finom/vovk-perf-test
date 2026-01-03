import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzls")
export default class FzlController {
  @operation({
    summary: "Get Fzls",
  })
  @get()
  static getFzls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzl",
  })
  @post("{id}")
  static createFzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
