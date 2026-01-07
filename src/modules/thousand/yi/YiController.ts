import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yi")
export default class YiController {
  @operation({
    summary: "Get Yi",
  })
  @get()
  static getYi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yi",
  })
  @post("{id}")
  static createYi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
