import { procedure, prefix, get, post, operation } from "vovk";

@prefix("curs")
export default class CurController {
  @operation({
    summary: "Get Curs",
  })
  @get()
  static getCurs = procedure({
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
