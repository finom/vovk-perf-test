import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yv")
export default class YvController {
  @operation({
    summary: "Get Yv",
  })
  @get()
  static getYv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yv",
  })
  @post("{id}")
  static createYv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
