import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxzs")
export default class LxzController {
  @operation({
    summary: "Get Lxzs",
  })
  @get()
  static getLxzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxz",
  })
  @post("{id}")
  static createLxz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
