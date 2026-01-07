import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcb")
export default class KcbController {
  @operation({
    summary: "Get Kcb",
  })
  @get()
  static getKcb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcb",
  })
  @post("{id}")
  static createKcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
