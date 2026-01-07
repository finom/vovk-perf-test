import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxu")
export default class LxuController {
  @operation({
    summary: "Get Lxu",
  })
  @get()
  static getLxu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxu",
  })
  @post("{id}")
  static createLxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
