import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxws")
export default class LxwController {
  @operation({
    summary: "Get Lxws",
  })
  @get()
  static getLxws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxw",
  })
  @post("{id}")
  static createLxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
