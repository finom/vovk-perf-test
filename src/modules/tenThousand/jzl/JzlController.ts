import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzls")
export default class JzlController {
  @operation({
    summary: "Get Jzls",
  })
  @get()
  static getJzls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzl",
  })
  @post("{id}")
  static createJzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
