import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgbs")
export default class JgbController {
  @operation({
    summary: "Get Jgbs",
  })
  @get()
  static getJgbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgb",
  })
  @post("{id}")
  static createJgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
