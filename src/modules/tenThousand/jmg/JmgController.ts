import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmgs")
export default class JmgController {
  @operation({
    summary: "Get Jmgs",
  })
  @get()
  static getJmgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmg",
  })
  @post("{id}")
  static createJmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
