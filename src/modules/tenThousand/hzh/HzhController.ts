import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzhs")
export default class HzhController {
  @operation({
    summary: "Get Hzhs",
  })
  @get()
  static getHzhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzh",
  })
  @post("{id}")
  static createHzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
