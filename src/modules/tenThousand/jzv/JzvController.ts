import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzv")
export default class JzvController {
  @operation({
    summary: "Get Jzv",
  })
  @get()
  static getJzv = procedure({
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
