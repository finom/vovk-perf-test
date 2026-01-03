import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avls")
export default class AvlController {
  @operation({
    summary: "Get Avls",
  })
  @get()
  static getAvls = procedure({
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
