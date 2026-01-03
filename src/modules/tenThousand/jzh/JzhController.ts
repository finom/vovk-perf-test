import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzhs")
export default class JzhController {
  @operation({
    summary: "Get Jzhs",
  })
  @get()
  static getJzhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzh",
  })
  @post("{id}")
  static createJzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
