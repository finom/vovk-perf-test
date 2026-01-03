import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzxes")
export default class FzxController {
  @operation({
    summary: "Get Fzxes",
  })
  @get()
  static getFzxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzx",
  })
  @post("{id}")
  static createFzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
