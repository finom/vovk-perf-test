import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxvs")
export default class LxvController {
  @operation({
    summary: "Get Lxvs",
  })
  @get()
  static getLxvs = procedure({
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
