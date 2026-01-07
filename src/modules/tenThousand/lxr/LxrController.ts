import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxr")
export default class LxrController {
  @operation({
    summary: "Get Lxr",
  })
  @get()
  static getLxr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxr",
  })
  @post("{id}")
  static createLxr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
