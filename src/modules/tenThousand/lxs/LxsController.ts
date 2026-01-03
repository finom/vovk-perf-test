import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxs")
export default class LxsController {
  @operation({
    summary: "Get Lxs",
  })
  @get()
  static getLxs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxs",
  })
  @post("{id}")
  static createLxs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
