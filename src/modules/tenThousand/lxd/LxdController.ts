import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxd")
export default class LxdController {
  @operation({
    summary: "Get Lxd",
  })
  @get()
  static getLxd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxd",
  })
  @post("{id}")
  static createLxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
