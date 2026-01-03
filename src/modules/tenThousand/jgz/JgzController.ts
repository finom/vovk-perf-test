import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgzs")
export default class JgzController {
  @operation({
    summary: "Get Jgzs",
  })
  @get()
  static getJgzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgz",
  })
  @post("{id}")
  static createJgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
