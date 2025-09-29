import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmts")
export default class CmtController {
  @operation({
    summary: "Get Cmts",
  })
  @get()
  static getCmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmt",
  })
  @post("{id}")
  static createCmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
