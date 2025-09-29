import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnzs")
export default class CnzController {
  @operation({
    summary: "Get Cnzs",
  })
  @get()
  static getCnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnz",
  })
  @post("{id}")
  static createCnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
