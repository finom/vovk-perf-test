import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxj")
export default class LxjController {
  @operation({
    summary: "Get Lxj",
  })
  @get()
  static getLxj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxj",
  })
  @post("{id}")
  static createLxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
