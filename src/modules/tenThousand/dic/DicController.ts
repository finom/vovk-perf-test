import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dic")
export default class DicController {
  @operation({
    summary: "Get Dic",
  })
  @get()
  static getDic = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dic",
  })
  @post("{id}")
  static createDic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
