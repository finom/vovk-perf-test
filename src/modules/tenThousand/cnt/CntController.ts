import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnts")
export default class CntController {
  @operation({
    summary: "Get Cnts",
  })
  @get()
  static getCnts = procedure({
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
