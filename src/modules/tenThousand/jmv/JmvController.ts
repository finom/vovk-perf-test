import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmv")
export default class JmvController {
  @operation({
    summary: "Get Jmv",
  })
  @get()
  static getJmv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmv",
  })
  @post("{id}")
  static createJmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
