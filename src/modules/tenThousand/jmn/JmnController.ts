import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmns")
export default class JmnController {
  @operation({
    summary: "Get Jmns",
  })
  @get()
  static getJmns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmn",
  })
  @post("{id}")
  static createJmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
