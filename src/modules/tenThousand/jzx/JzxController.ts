import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzxes")
export default class JzxController {
  @operation({
    summary: "Get Jzxes",
  })
  @get()
  static getJzxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzx",
  })
  @post("{id}")
  static createJzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
