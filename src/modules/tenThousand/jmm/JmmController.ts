import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmm")
export default class JmmController {
  @operation({
    summary: "Get Jmm",
  })
  @get()
  static getJmm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmm",
  })
  @post("{id}")
  static createJmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
