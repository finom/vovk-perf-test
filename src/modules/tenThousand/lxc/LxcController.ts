import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxc")
export default class LxcController {
  @operation({
    summary: "Get Lxc",
  })
  @get()
  static getLxc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxc",
  })
  @post("{id}")
  static createLxc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
