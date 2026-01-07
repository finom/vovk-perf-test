import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxh")
export default class LxhController {
  @operation({
    summary: "Get Lxh",
  })
  @get()
  static getLxh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxh",
  })
  @post("{id}")
  static createLxh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
