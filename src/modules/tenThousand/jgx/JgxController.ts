import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgxes")
export default class JgxController {
  @operation({
    summary: "Get Jgxes",
  })
  @get()
  static getJgxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgx",
  })
  @post("{id}")
  static createJgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
