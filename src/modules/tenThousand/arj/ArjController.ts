import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arj")
export default class ArjController {
  @operation({
    summary: "Get Arj",
  })
  @get()
  static getArj = procedure({
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
