import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avl")
export default class AvlController {
  @operation({
    summary: "Get Avl",
  })
  @get()
  static getAvl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avl",
  })
  @post("{id}")
  static createAvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
