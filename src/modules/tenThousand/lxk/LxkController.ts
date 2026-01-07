import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxk")
export default class LxkController {
  @operation({
    summary: "Get Lxk",
  })
  @get()
  static getLxk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxk",
  })
  @post("{id}")
  static createLxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
