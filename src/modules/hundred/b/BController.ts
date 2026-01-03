import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bs")
export default class BController {
  @operation({
    summary: "Get BS",
  })
  @get()
  static getBS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create B",
  })
  @post("{id}")
  static createB = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
