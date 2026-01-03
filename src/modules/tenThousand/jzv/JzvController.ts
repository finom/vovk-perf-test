import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzvs")
export default class JzvController {
  @operation({
    summary: "Get Jzvs",
  })
  @get()
  static getJzvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzv",
  })
  @post("{id}")
  static createJzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
