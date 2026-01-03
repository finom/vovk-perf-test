import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dics")
export default class DicController {
  @operation({
    summary: "Get Dics",
  })
  @get()
  static getDics = procedure({
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
