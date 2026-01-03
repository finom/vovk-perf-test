import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxgs")
export default class LxgController {
  @operation({
    summary: "Get Lxgs",
  })
  @get()
  static getLxgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxg",
  })
  @post("{id}")
  static createLxg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
