import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxv")
export default class LxvController {
  @operation({
    summary: "Get Lxv",
  })
  @get()
  static getLxv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxv",
  })
  @post("{id}")
  static createLxv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
