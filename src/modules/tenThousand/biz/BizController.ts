import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biz")
export default class BizController {
  @operation({
    summary: "Get Biz",
  })
  @get()
  static getBiz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Biz",
  })
  @post("{id}")
  static createBiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
