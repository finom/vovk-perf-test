import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yys")
export default class YyController {
  @operation({
    summary: "Get Yys",
  })
  @get()
  static getYys = procedure({
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
