import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ys")
export default class YsController {
  @operation({
    summary: "Get Ys",
  })
  @get()
  static getYs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ys",
  })
  @post("{id}")
  static createYs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
