import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcx")
export default class KcxController {
  @operation({
    summary: "Get Kcx",
  })
  @get()
  static getKcx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcx",
  })
  @post("{id}")
  static createKcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
