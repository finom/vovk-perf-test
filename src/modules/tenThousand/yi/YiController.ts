import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yis")
export default class YiController {
  @operation({
    summary: "Get Yis",
  })
  @get()
  static getYis = procedure({
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
