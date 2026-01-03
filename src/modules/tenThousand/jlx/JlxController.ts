import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlxes")
export default class JlxController {
  @operation({
    summary: "Get Jlxes",
  })
  @get()
  static getJlxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlx",
  })
  @post("{id}")
  static createJlx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
