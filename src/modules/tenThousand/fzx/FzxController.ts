import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzx")
export default class FzxController {
  @operation({
    summary: "Get Fzx",
  })
  @get()
  static getFzx = procedure({
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
