import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxbs")
export default class LxbController {
  @operation({
    summary: "Get Lxbs",
  })
  @get()
  static getLxbs = procedure({
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
