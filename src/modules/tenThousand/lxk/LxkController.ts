import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxks")
export default class LxkController {
  @operation({
    summary: "Get Lxks",
  })
  @get()
  static getLxks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxk",
  })
  @post("{id}")
  static createLxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
