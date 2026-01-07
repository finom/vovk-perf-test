import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htn")
export default class HtnController {
  @operation({
    summary: "Get Htn",
  })
  @get()
  static getHtn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htn",
  })
  @post("{id}")
  static createHtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
