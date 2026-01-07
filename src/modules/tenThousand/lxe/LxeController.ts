import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxe")
export default class LxeController {
  @operation({
    summary: "Get Lxe",
  })
  @get()
  static getLxe = procedure({
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
