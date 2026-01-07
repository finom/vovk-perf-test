import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnt")
export default class CntController {
  @operation({
    summary: "Get Cnt",
  })
  @get()
  static getCnt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnt",
  })
  @post("{id}")
  static createCnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
