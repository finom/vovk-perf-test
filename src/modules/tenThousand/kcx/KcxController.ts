import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcxes")
export default class KcxController {
  @operation({
    summary: "Get Kcxes",
  })
  @get()
  static getKcxes = procedure({
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
