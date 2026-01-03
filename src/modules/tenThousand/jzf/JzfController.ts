import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzfs")
export default class JzfController {
  @operation({
    summary: "Get Jzfs",
  })
  @get()
  static getJzfs = procedure({
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
