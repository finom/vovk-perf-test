import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcg")
export default class KcgController {
  @operation({
    summary: "Get Kcg",
  })
  @get()
  static getKcg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcg",
  })
  @post("{id}")
  static createKcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
