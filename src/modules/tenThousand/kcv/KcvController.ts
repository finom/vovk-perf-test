import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcv")
export default class KcvController {
  @operation({
    summary: "Get Kcv",
  })
  @get()
  static getKcv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcv",
  })
  @post("{id}")
  static createKcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
