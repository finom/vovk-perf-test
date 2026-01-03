import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmms")
export default class JmmController {
  @operation({
    summary: "Get Jmms",
  })
  @get()
  static getJmms = procedure({
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
