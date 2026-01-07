import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgm")
export default class JgmController {
  @operation({
    summary: "Get Jgm",
  })
  @get()
  static getJgm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgm",
  })
  @post("{id}")
  static createJgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
