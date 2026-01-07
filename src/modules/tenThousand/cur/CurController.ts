import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cur")
export default class CurController {
  @operation({
    summary: "Get Cur",
  })
  @get()
  static getCur = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cur",
  })
  @post("{id}")
  static createCur = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
