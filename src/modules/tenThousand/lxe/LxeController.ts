import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxes")
export default class LxeController {
  @operation({
    summary: "Get Lxes",
  })
  @get()
  static getLxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxe",
  })
  @post("{id}")
  static createLxe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
