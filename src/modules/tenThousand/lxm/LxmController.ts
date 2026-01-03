import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxms")
export default class LxmController {
  @operation({
    summary: "Get Lxms",
  })
  @get()
  static getLxms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxm",
  })
  @post("{id}")
  static createLxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
