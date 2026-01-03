import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmts")
export default class JmtController {
  @operation({
    summary: "Get Jmts",
  })
  @get()
  static getJmts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmt",
  })
  @post("{id}")
  static createJmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
