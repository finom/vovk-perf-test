import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yy")
export default class YyController {
  @operation({
    summary: "Get Yy",
  })
  @get()
  static getYy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yy",
  })
  @post("{id}")
  static createYy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
