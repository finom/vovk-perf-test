import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgx")
export default class JgxController {
  @operation({
    summary: "Get Jgx",
  })
  @get()
  static getJgx = procedure({
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
