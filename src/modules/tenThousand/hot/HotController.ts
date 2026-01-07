import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hot")
export default class HotController {
  @operation({
    summary: "Get Hot",
  })
  @get()
  static getHot = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hot",
  })
  @post("{id}")
  static createHot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
