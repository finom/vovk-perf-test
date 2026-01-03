import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzks")
export default class JzkController {
  @operation({
    summary: "Get Jzks",
  })
  @get()
  static getJzks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzk",
  })
  @post("{id}")
  static createJzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
