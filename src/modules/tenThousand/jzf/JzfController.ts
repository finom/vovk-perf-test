import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzf")
export default class JzfController {
  @operation({
    summary: "Get Jzf",
  })
  @get()
  static getJzf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzf",
  })
  @post("{id}")
  static createJzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
