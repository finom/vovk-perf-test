import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lojs")
export default class LojController {
  @operation({
    summary: "Get Lojs",
  })
  @get()
  static getLojs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loj",
  })
  @post("{id}")
  static createLoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
