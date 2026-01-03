import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ys")
export default class YController {
  @operation({
    summary: "Get YS",
  })
  @get()
  static getYS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Y",
  })
  @post("{id}")
  static createY = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
