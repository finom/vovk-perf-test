import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgks")
export default class JgkController {
  @operation({
    summary: "Get Jgks",
  })
  @get()
  static getJgks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgk",
  })
  @post("{id}")
  static createJgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
