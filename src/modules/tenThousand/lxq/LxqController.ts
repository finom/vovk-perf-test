import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxqs")
export default class LxqController {
  @operation({
    summary: "Get Lxqs",
  })
  @get()
  static getLxqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxq",
  })
  @post("{id}")
  static createLxq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
