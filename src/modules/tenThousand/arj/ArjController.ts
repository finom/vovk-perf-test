import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arjs")
export default class ArjController {
  @operation({
    summary: "Get Arjs",
  })
  @get()
  static getArjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arj",
  })
  @post("{id}")
  static createArj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
