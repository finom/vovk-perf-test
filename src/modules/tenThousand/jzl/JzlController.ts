import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzl")
export default class JzlController {
  @operation({
    summary: "Get Jzl",
  })
  @get()
  static getJzl = procedure({
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
