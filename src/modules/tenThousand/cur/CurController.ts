import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("curs")
export default class CurController {
  @operation({
    summary: "Get Curs",
  })
  @get()
  static getCurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cur",
  })
  @post("{id}")
  static createCur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
