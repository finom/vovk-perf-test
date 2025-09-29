import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgrs")
export default class CgrController {
  @operation({
    summary: "Get Cgrs",
  })
  @get()
  static getCgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgr",
  })
  @post("{id}")
  static createCgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
