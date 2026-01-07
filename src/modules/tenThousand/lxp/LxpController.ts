import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxp")
export default class LxpController {
  @operation({
    summary: "Get Lxp",
  })
  @get()
  static getLxp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxp",
  })
  @post("{id}")
  static createLxp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
