import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxb")
export default class LxbController {
  @operation({
    summary: "Get Lxb",
  })
  @get()
  static getLxb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxb",
  })
  @post("{id}")
  static createLxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
