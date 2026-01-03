import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtns")
export default class JtnController {
  @operation({
    summary: "Get Jtns",
  })
  @get()
  static getJtns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtn",
  })
  @post("{id}")
  static createJtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
